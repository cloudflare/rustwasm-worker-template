# 👷‍♀️🦀🕸️ `rustwasm-worker-template`

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting worker to Cloudflare's worker infrastructure.


## 🛠️ Required tools

- [Rust](https://www.rust-lang.org/tools/install)
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update)

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.

## 🚴 Usage

### 🐑 Use `wrangler generate` to Clone this Template.

[Learn more about `wrangler generate` here.](https://github.com/cloudflare/wrangler#-generate)

```
$ wrangler generate wasm-worker --type rust

🔧   Creating project called `wasm-worker`...
✨   Done! New project created <path>/wasm-worker
🕵️  You will need to update the following fields in the created wrangler.toml file before continuing:
🕵️  You can find your account_id in the right sidebar of your account's Workers page, and zone_id in the right sidebar of a zone's overview tab at https://dash.cloudflare.com
- account_id
```

[Login](https://developers.cloudflare.com/workers/cli-wrangler/commands#login) to your Cloudflare account, and edit [wrangler.toml](wrangler.toml) to add your `account_id`. The `zone_id` and `route` are only needed if you want to deploy on your own domain.

### 👂 Use `wrangler dev` to build and run locally, while watching for changes.

[Learn more about `wrangler dev` here.](https://github.com/cloudflare/wrangler#-dev)

```
$ wrangler dev

🌀  Compiling your project to WebAssembly...
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
   ...
   ...
   Compiling wasm-worker v0.1.0
    Finished release [optimized] target(s) in 11.48s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: ✨   Done in 11.96s
[INFO]: 📦   Your wasm pkg is ready to publish at <path>/wasm-worker/pkg.
💁  watching "./"
👂  Listening on http://127.0.0.1:8787
```

### ☁️ 🆙 Use `wrangler publish` to push your worker to Cloudflare.

[Learn more about `wrangler publish` here.](https://github.com/cloudflare/wrangler#%EF%B8%8F--publish)

```
$ wrangler publish

🌀  Compiling your project to WebAssembly...
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
    Finished release [optimized] target(s) in 0.03s
[INFO]: ⬇️  Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: ✨   Done in 0.45s
[INFO]: 📦   Your wasm pkg is ready to publish at <path>/wasm-worker/pkg.
✨  Build succeeded
✨  Successfully published your script to
 https://rust.<subdomain>.workers.dev
 ```