# Spline Handoff Protocol

Spline is a 3D design tool the user operates manually. The AI does NOT have access to Spline directly.

## When This Applies

Any task requiring:
- 3D scenes or objects
- Interactive animated elements (e.g. a document that types itself)
- Animated workflow diagrams in 3D
- Physics-based interactive visuals
- Anything better built in Spline than in code

## The Protocol (follow exactly)

1. **STOP** — do not attempt to build the 3D element in Three.js, canvas, or any other code approach.

2. **Write a Spline AI prompt** — copy-pasteable, precise, describing:
   - What the scene should look like
   - What objects/elements are in it
   - What the animation/interaction should do
   - Colors, materials, lighting style
   - Camera angle and framing

3. **Specify the export format** — one of:
   - `@splinetool/react-spline` React component
   - `<spline-viewer>` web component embed tag

4. **Wait** — do not continue building that section until the user pastes back the exported code.

5. **Integrate** — once the user pastes the code, integrate it into the component and continue.

## Example Prompt Structure

```
Create a 3D scene in Spline:
- A single A4 document floating at a slight angle
- Text appears character by character on the document (typewriter effect)
- Clean white paper material, subtle shadow beneath
- Background: transparent (no background)
- Gentle infinite float animation (up/down, slow)
- Camera: slightly above, looking down at 15-degree angle
Export as @splinetool/react-spline React component
```
