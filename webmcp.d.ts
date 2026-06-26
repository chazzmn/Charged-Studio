import "react";

/**
 * WebMCP Declarative API attributes.
 *
 * Adds `toolname` / `tooldescription` to all HTML elements so they can be set on
 * <form> elements without TypeScript errors. These expose a form to AI agents as
 * a callable tool (the browser handles submission), and are read by AEO crawlers.
 * Spec: https://webmachinelearning.github.io/webmcp/
 */
declare module "react" {
  interface HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }
}
