declare module '*.vue' {
  import { DefineComponent } from 'vue'

  // biome-ignore lint/complexity/noBannedTypes: standard Vue SFC shim signature
  // biome-ignore lint/suspicious/noExplicitAny: standard Vue SFC shim signature
  const component: DefineComponent<{}, {}, any>
  export default component
}
