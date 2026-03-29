declare namespace ReactDOM {
  function createRoot(container: Element | DocumentFragment): Root;
  
  interface Root {
    render(children: React.ReactElement | React.ReactNode): void;
    unmount(): void;
  }
}

declare module "react-dom" {
  export = ReactDOM;
}

declare module "react-dom/client" {
  export = ReactDOM;
}
