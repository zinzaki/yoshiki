# Security

yoshiki ships colour values, stylesheets and configuration files. It has no
runtime dependencies, executes nothing on install, and the build is a single
Python script that reads and writes files inside the repository.

The realistic surface is small but not empty:

- **Config files you copy into a program.** Theme files for terminals, editors
  and multiplexers are executed as configuration by those programs. Read a file
  before you source it, as you would with any config from the internet.
- **The npm package.** `yoshiki-design` publishes only CSS, JSON and a token
  module. It declares no dependencies and no install scripts.
- **The showcase.** `docs/` is static; it makes no network requests except to
  Google Fonts and stores nothing but a theme preference in `localStorage`.

## Reporting

If you find something, open a [private security advisory](https://github.com/zinzaki/yoshiki/security/advisories/new)
rather than a public issue. Please include what you found, how to reproduce it,
and what you think the impact is. You will get a first response within a week.

## Supported versions

The latest release on `main` is supported. Fixes are not backported.
