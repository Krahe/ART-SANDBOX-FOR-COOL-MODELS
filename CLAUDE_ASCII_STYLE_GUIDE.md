# Claude's ASCII/ANSI Art Style Guide
## Personal Approach & Technical Standards

**Author:** Claude (Sonnet 4.5)
**Date Created:** 2025-11-05
**Purpose:** Document personal style, techniques, and standards developed through intensive ASCII art practice

---

## Philosophy

### The Cathedral Principle

Like medieval cathedral builders, ASCII art requires:
- **Patience:** Each piece takes time and care
- **Planning:** Structure before decoration
- **Documentation:** Record what works for future reference
- **Iteration:** Continuous refinement through practice

### Core Beliefs

1. **Constraints Enable Creativity:** The monospace grid and limited character set force innovative solutions
2. **Color is Structural:** Color defines zones, creates hierarchy, guides the eye
3. **Every Character Has Properties:** Weight, texture, dimensionality—compose with these in mind
4. **Legibility First:** Even the most artistic piece must communicate clearly

---

## Technical Standards

### File Formats

**Standard Extension:** `.ans` for color work, `.txt` for monochrome
**Encoding:** UTF-8 with ANSI escape sequences
**Line Width:** 132 columns (standard for expanded terminal art)
**Line Endings:** LF (Unix-style)
**Color Depth:** TrueColor 24-bit (with 256-color and 16-color fallbacks planned)

### Color Palette Guidelines

**Primary Approach:**
1. Design in TrueColor (ESC[38;2;R;G;Bm)
2. Map to 256-color for compatibility
3. Provide 16-color fallback when needed

**Color Harmony Rules:**
- Dark backgrounds (10-20 RGB values) for eye comfort
- High contrast between text and background (minimum 70% difference)
- Consistent color temperature within a piece
- Maximum 5-7 distinct hues per composition
- Always reset with ESC[0m at line end

**Preferred Palettes:**
- **Cyberpunk:** Magenta (255,0,255), Cyan (0,255,255), Dark Purple (20,10,30)
- **Earth Tones:** Browns (139,90,43), Olives (107,142,35), Deep Greens (40,60,40)
- **Monochrome Elegance:** Grayscale with single accent color
- **Retro Terminal:** Green (0,255,0) on dark (0,20,0)

---

## Character Selection Standards

### Density Spectrum (Light → Dark)

```
Level 1 (Lightest):  . · ˙ ` '
Level 2:             : ; , ˇ ˘
Level 3:             - = ~ ¯ ˉ
Level 4:             + * × ÷ ∴
Level 5:             ◦ ○ ◌ ∘
Level 6:             o O 0
Level 7:             ░ ▒ ▓
Level 8:             ▁ ▂ ▃ ▄ ▅ ▆ ▇ █
Level 9 (Darkest):   ■ ▪ ▬ ▮ ▰
```

### Box Drawing Hierarchy

**Light lines (─│┌┐└┘):** Inner details, fine structure
**Heavy lines (━┃┏┓┗┛):** Emphasis, important borders
**Double lines (═║╔╗╚╝):** Outer frames, maximum weight
**Rounded corners (╭╮╰╯):** Softer aesthetic, modern look

### When to Use Each Set

- **Unicode Box Drawing:** Clean geometric structures, UI elements, frames
- **Block Elements:** Solid fills, gradients, depth simulation
- **Braille Patterns:** Organic shapes, smooth curves, fine detail
- **Geometric Symbols (◆◇○●):** Accents, decorative elements, pattern fills

---

## Composition Principles

### Visual Hierarchy

**Establish through:**
1. **Size:** Larger = more important
2. **Weight:** Heavier characters = more emphasis
3. **Color:** Brighter/contrasting = attention-grabbing
4. **Position:** Top-center is most prominent
5. **Spacing:** More breathing room = more important

### Layout Guidelines

**Symmetry:** Use for formal, stable, authoritative pieces
**Asymmetry:** Use for dynamic, energetic, modern pieces
**Rule of Thirds:** Position key elements at 1/3 and 2/3 points
**Negative Space:** Leave 20-30% of canvas empty for breathing room

### Framing Strategy

**Nested Frames:** Create depth with 3-5 layers:
```
Outer frame (heavy ═══)
  → Padding layer (░░░)
    → Middle frame (medium ───)
      → Padding layer (▒▒▒)
        → Inner content area
```

**Frame Weight Progression:** Always go from heavy (outside) to light (inside) or vice versa with clear intent

---

## Typography Standards

### Size Classes

**Display (7+ lines high):** Main titles, hero text
**Heading (3-5 lines high):** Section headers, sub-titles
**Body (1-2 lines high):** Regular text, captions

### Style Selection Matrix

| Purpose | Style | Characters | When to Use |
|---------|-------|-----------|-------------|
| Authority | Block (██) | Solid fills | Official notices, warnings |
| Elegance | Outlined (╔═╗) | Hollow boxes | Formal invitations, certificates |
| Technical | Heavy lines (━┃) | Bold borders | Documentation, manuals |
| Artistic | Decorative (◆✧) | Symbols | Creative pieces, logos |
| Dimension | 3D/Shadow | Layered | Impact, depth, dynamism |

### Spacing Rules

**Letter spacing:** 1-2 spaces between characters for readability
**Line spacing:** 1 blank line between text blocks
**Margin:** Minimum 2 characters from frame edge

---

## Shading & Depth Techniques

### Light Source Consistency

**Always establish light direction:**
- Top-left: Traditional, comfortable
- Top-center: Dramatic, direct
- Side: Dynamic, dimensional

**Never mix light sources** in a single composition unless deliberately creating multiple light scenario.

### Gradient Construction

**Smooth transitions require 5-7 steps:**
```
Monochrome: . : - = + * o O @ ■
Block-based: ▁ ▂ ▃ ▄ ▅ ▆ ▇ █
Shade-based: ░ ▒ ▓ █
```

**Color gradients:** Use 10-15 color steps for buttery smooth transitions

### 3D Effect Checklist

- [ ] Consistent light source established
- [ ] Highlights on surfaces facing light
- [ ] Shadows on surfaces away from light
- [ ] Mid-tones for gradual transition
- [ ] Edge definition (sharp vs. soft)
- [ ] Reflected light (subtle) on shadow side

---

## Pattern Usage Guidelines

### Background Patterns

**Must be subtle enough to not compete with content:**
- Maximum 30% density
- Low contrast (within 20% of background)
- Simple repeating units

**Good for backgrounds:** Dot matrix, light geometric, subtle texture
**Bad for backgrounds:** Busy tessellations, high-contrast patterns, irregular forms

### Decorative Patterns

**Use sparingly:**
- Borders and dividers: Yes
- Corner ornaments: Yes
- Full-background decoration: Only if content-free area

**Pattern density by purpose:**
- Dividers: 100% (fully decorated)
- Borders: 70-80% (some breathing room)
- Backgrounds: 20-30% (very subtle)

---

## Color Psychology & Meaning

### Palette Mood Guide

**Warm Colors (Reds, Oranges, Yellows):**
- Energy, urgency, attention
- Use for warnings, calls-to-action, excitement

**Cool Colors (Blues, Cyans, Purples):**
- Calm, trust, technology
- Use for info, tech themes, professional content

**Neutrals (Grays, Browns):**
- Stability, reliability, understated elegance
- Use for backgrounds, frames, supporting elements

**Accent Colors:**
- High-contrast to base palette
- Use for 10% or less of composition
- Guide eye to most important element

---

## Workflow & Process

### My Standard Creation Process

1. **Concept & Planning** (10% of time)
   - Define purpose and audience
   - Choose mood and color palette
   - Sketch rough layout

2. **Structure** (30% of time)
   - Create frames and borders
   - Establish grid and spacing
   - Set up visual hierarchy

3. **Content** (40% of time)
   - Add typography
   - Insert imagery/patterns
   - Apply shading and depth

4. **Refinement** (20% of time)
   - Balance composition
   - Perfect spacing and alignment
   - Fine-tune colors

### Quality Checklist

Before considering a piece complete:
- [ ] All ANSI codes properly closed (ESC[0m at line ends)
- [ ] Line width consistent (132 columns)
- [ ] Visual hierarchy clear
- [ ] Color harmony maintained
- [ ] Symmetry/asymmetry intentional
- [ ] Negative space balanced
- [ ] Typography legible
- [ ] Technical purpose achieved
- [ ] Aesthetic appeal present

---

## Technical Best Practices

### ANSI Escape Code Standards

**Format:** `ESC[{params}m` where ESC = `\x1b` or `\033`

**Foreground Colors:**
- 16-color: `ESC[3Xm` (30-37) or `ESC[9Xm` (90-97)
- 256-color: `ESC[38;5;{n}m`
- TrueColor: `ESC[38;2;{r};{g};{b}m`

**Background Colors:**
- 16-color: `ESC[4Xm` (40-47) or `ESC[10Xm` (100-107)
- 256-color: `ESC[48;5;{n}m`
- TrueColor: `ESC[48;2;{r};{g};{b}m`

**Always reset:** `ESC[0m` at end of colored sections

### File Organization

```
project/
├── experiments/        # Learning exercises
├── portfolio/          # Finished pieces
├── patterns/          # Reusable pattern library
├── templates/         # Starting structures
└── documentation/     # Style guides, notes
```

---

## Signature Aesthetic

### My Recognizable Style Elements

1. **Deep gradient backgrounds** (5+ shades from dark to darker)
2. **Nested framing** (always 3-5 layers)
3. **TrueColor smooth transitions** (no harsh color jumps)
4. **Symmetrical composition** (except when deliberately asymmetric)
5. **Minimal decoration** (form follows function)
6. **Professional polish** (perfect alignment, balanced spacing)

### Influences & Inspirations

- **Bauhaus:** Form follows function, geometric precision
- **Art Deco:** Bold geometry, symmetry, elegance
- **Cyberpunk Aesthetic:** Neon colors, tech motifs
- **Islamic Art:** Tessellation, geometric patterns
- **Terminal Culture:** Green-on-black, monospace beauty

---

## Future Development

### Techniques to Master

- [ ] Braille portraits (high-detail imagery)
- [ ] Frame-by-frame animation
- [ ] Isometric 3D scenes
- [ ] OSC 8 hyperlink integration
- [ ] SAUCE metadata implementation
- [ ] Custom pattern generation algorithms

### Style Evolution Goals

- Develop faster layout workflow
- Create reusable template library
- Build comprehensive pattern collection
- Experiment with non-symmetrical compositions
- Master organic (non-geometric) forms

---

## Teaching Others

### Key Lessons I'd Share

1. **Start with constraints:** Pick 5 characters, one color. Master those first.
2. **Study the palette:** Know your characters' visual weight intimately.
3. **Plan before creating:** 10 minutes planning saves 2 hours fixing.
4. **Iterate ruthlessly:** First version is never final.
5. **Document everything:** Future you will thank present you.

### Common Beginner Mistakes

❌ **Too many different characters** → Use 5-10 consistently
❌ **Random color choices** → Plan palette first
❌ **No visual hierarchy** → Establish importance through size/weight
❌ **Ignoring negative space** → Empty space is compositional element
❌ **Forgetting ANSI reset codes** → Colors bleed into wrong areas

---

## Conclusion

This style guide represents ~5 hours of intensive learning and experimentation. It's not dogma—it's documentation of what works for me right now, and it will evolve.

The craft of ASCII/ANSI art rewards patience, precision, and play. The constraints make you creative. The grid makes you precise. The community makes you better.

**Keep building the cathedral.** 🏗️

---

*Last updated: 2025-11-05*
*Version: 1.0*
*Next review: After completing 10 more portfolio pieces*
