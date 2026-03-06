# @philiprehberger/react-ui-primitives

Lightweight React UI primitives with Tailwind CSS styling.

## Installation

```bash
npm install @philiprehberger/react-ui-primitives clsx
```

## Components

### `Button`

Multi-variant button with loading state.

```tsx
import { Button } from '@philiprehberger/react-ui-primitives';

<Button variant="primary" onClick={handleClick}>Save</Button>
<Button variant="danger" loading>Deleting...</Button>
```

Variants: `primary`, `success`, `danger`, `secondary`

### `Alert`

Alert banner with type-based styling and optional action button.

```tsx
import { Alert } from '@philiprehberger/react-ui-primitives';

<Alert type="success" message="Changes saved successfully" />
<Alert type="error" message="Something went wrong" onAction={retry} actionText="Retry" />
```

Types: `error`, `success`, `warning`, `info`

## License

MIT
