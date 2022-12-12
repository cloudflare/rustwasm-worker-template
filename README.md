# Getting Started

This template is based on [rustwasm-worker-template from Cloudflare](https://github.com/cloudflare/rustwasm-worker-template/), but updated. It uses [`workers-rs`](https://crates.io/crates/worker) ([GitHub repo](https://github.com/cloudflare/workers-rs)).

This template is designed for compiling Rust to WebAssembly and publishing the resulting worker to Cloudflare's [edge infrastructure](https://www.cloudflare.com/network/).

## Usage 

This template starts you off with a `src/lib.rs` file, acting as an entrypoint for requests hitting
your Worker. Feel free to add more code in this file, or create Rust modules anywhere else for this
project to use. 

### Prerequisites
- Re-install rust up using [rust up](https://rustup.rs/). For example, if you installed rust using brew, uninstall it by running `brew uninstall rust`
- Alternatively, 
> For non-Rustup setups, the wasm32-unknown-unknown target needs to be installed manually. See https://rustwasm.github.io/wasm-pack/book/prerequisites/non-rustup-setups.html on how to do this

Replace `{{project-name}}` in `wrangler.toml` and `Cargo.toml`. Also update `authors` in `Cargo.toml`.

With `wrangler`, you can build, test, and deploy your Worker with the following commands: 

```bash
# compiles your project to WebAssembly and will warn of any issues
wrangler publish --dry-run --outdir=dist

# run your Worker in an ideal development workflow (with a local server, file watcher & more)
wrangler dev

# deploy your Worker globally to the Cloudflare network (update your wrangler.toml file for configuration)
wrangler publish
```

## WebAssembly

`workers-rs` (the Rust SDK for Cloudflare Workers used in this template) is meant to be executed as 
compiled WebAssembly, and as such so **must** all the code you write and depend upon. All crates and
modules used in Rust-based Workers projects have to compile to the `wasm32-unknown-unknown` triple. 

Read more about this on the [`workers-rs` project README](https://github.com/cloudflare/workers-rs).

## Issues

If you have any problems with the `worker` crate, please open an issue on the upstream project 
issue tracker on the [`workers-rs` repository](https://github.com/cloudflare/workers-rs).

