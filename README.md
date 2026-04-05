# @philiprehberger/react-ui-primitives

[![CI](https://github.com/philiprehberger/ts-react-ui-primitives/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-react-ui-primitives/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/react-ui-primitives.svg)](https://www.npmjs.com/package/@philiprehberger/react-ui-primitives)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-react-ui-primitives)](https://github.com/philiprehberger/ts-react-ui-primitives/commits/main)

Lightweight React UI primitives with Tailwind CSS styling

## Installation

```bash
npm install @philiprehberger/react-ui-primitives clsx
```

## Usage

### `Button`

Multi-variant button with loading state

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

## API

| Export | Type | Description |
|--------|------|-------------|
| `Button` | Component | Multi-variant button with loading state and hover text |
| `Alert` | Component | Alert banner with type-based styling and optional action button |
| `ButtonProps` | Type | Props: `variant?`, `loading?`, `hoverText?`, plus native button attrs |
| `ButtonVariant` | Type | `'primary' \| 'success' \| 'danger' \| 'secondary'` |
| `AlertProps` | Type | Props: `type`, `message`, `onAction?`, `actionText?`, `className?` |
| `AlertType` | Type | `'error' \| 'success' \| 'warning' \| 'info'` |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-react-ui-primitives)

🐛 [Report issues](https://github.com/philiprehberger/ts-react-ui-primitives/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-react-ui-primitives/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
