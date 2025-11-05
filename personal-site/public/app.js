// State management
let currentZoom = 12;
let wrapEnabled = false;

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;

        // Update active nav button
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show corresponding section
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    });
});

// Load content gallery
async function loadGallery() {
    try {
        const response = await fetch('/api/content');
        const content = await response.json();

        const grid = document.getElementById('content-grid');
        grid.innerHTML = '';

        content.forEach(item => {
            const card = createContentCard(item);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Failed to load gallery:', error);
        document.getElementById('content-grid').innerHTML =
            '<p>Failed to load content. Make sure files are in the content/ directory.</p>';
    }
}

function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card';

    const typeColors = {
        ansi: '#00d4ff',
        markdown: '#ff6b35',
        text: '#4ecdc4',
        nfo: '#ffe66d'
    };

    card.innerHTML = `
        <span class="type-badge" style="background: ${typeColors[item.type] || '#666'}">${item.type.toUpperCase()}</span>
        <h3>${item.name}</h3>
        <div class="meta">
            Size: ${formatBytes(item.size)} | Modified: ${new Date(item.modified).toLocaleDateString()}
        </div>
    `;

    card.addEventListener('click', () => loadFile(item.name, item.type));

    return card;
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Load and display files
async function loadFile(filename, type) {
    // Switch to viewer section
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="viewer"]').classList.add('active');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('viewer').classList.add('active');

    // Update filename display
    document.getElementById('filename-display').textContent = filename;

    // Clear previous content
    document.getElementById('ansi-display').innerHTML = '';
    document.getElementById('text-display').innerHTML = '';

    try {
        if (type === 'ansi' || type === 'nfo') {
            await loadAnsiFile(filename);
        } else {
            await loadTextFile(filename);
        }
    } catch (error) {
        console.error('Failed to load file:', error);
        document.getElementById('text-display').innerHTML =
            '<p style="color: #ff6b6b;">Failed to load file. Please try again.</p>';
    }
}

async function loadAnsiFile(filename) {
    const response = await fetch(`/api/ansi/${filename}`);
    const data = await response.json();

    const display = document.getElementById('ansi-display');
    display.innerHTML = data.html;
    display.style.display = 'block';
    document.getElementById('text-display').style.display = 'none';

    // Reset zoom
    currentZoom = 12;
    display.style.fontSize = currentZoom + 'px';
}

async function loadTextFile(filename) {
    const response = await fetch(`/api/document/${filename}`);
    const data = await response.json();

    const display = document.getElementById('text-display');
    document.getElementById('ansi-display').style.display = 'none';
    display.style.display = 'block';

    if (data.isMarkdown && data.html) {
        display.innerHTML = data.html;
    } else {
        display.textContent = data.content;
    }
}

// Viewer controls
document.getElementById('zoom-in').addEventListener('click', () => {
    currentZoom += 2;
    document.getElementById('ansi-display').style.fontSize = currentZoom + 'px';
});

document.getElementById('zoom-out').addEventListener('click', () => {
    if (currentZoom > 6) {
        currentZoom -= 2;
        document.getElementById('ansi-display').style.fontSize = currentZoom + 'px';
    }
});

document.getElementById('reset-zoom').addEventListener('click', () => {
    currentZoom = 12;
    document.getElementById('ansi-display').style.fontSize = currentZoom + 'px';
});

document.getElementById('toggle-wrap').addEventListener('click', () => {
    wrapEnabled = !wrapEnabled;
    const display = document.getElementById('ansi-display');
    if (wrapEnabled) {
        display.classList.add('wrap');
    } else {
        display.classList.remove('wrap');
    }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});
