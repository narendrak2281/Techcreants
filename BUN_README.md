# Bun Installation Instructions

## Prerequisites

Make sure you have Bun installed on your system:

### Windows (PowerShell)

```powershell
irm bun.sh/install.ps1 | iex
```

### macOS/Linux

```bash
curl -fsSL https://bun.sh/install | bash
```

## Installation

```bash
bun install
```

## Development

```bash
bun dev
```

## Build

```bash
bun run build
```

## Type Checking

```bash
bun run type-check
```

## Linting

```bash
bun run lint
```

## Testing

```bash
bun test
```

## Package Management

- Use `bun add <package>` instead of `npm install <package>`
- Use `bun remove <package>` instead of `npm uninstall <package>`
- Use `bun update` instead of `npm update`

## Performance Benefits

- ~20x faster than npm install
- Built-in bundler and test runner
- Native TypeScript support
- Zero-config setup
