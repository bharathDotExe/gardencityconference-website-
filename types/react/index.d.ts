declare namespace React {
  type FC<P = {}> = (props: P) => JSX.Element | null;
  type FunctionComponent<P = {}> = FC<P>;

  interface FormEvent<T = Element> {
    preventDefault(): void;
    currentTarget: T;
  }

  interface ChangeEvent<T = Element> {
    target: T & { value: string };
    currentTarget: T & { value: string };
  }

  function useState<T>(initialState: T | (() => T)): [T, (value: T | ((val: T) => T)) => void];
  function useEffect(effect: () => void | (() => void), deps?: React.DependencyList): void;
  function useRef<T>(initialValue: T): React.MutableRefObject<T>;
  function useCallback<T extends (...args: any[]) => any>(callback: T, deps: React.DependencyList): T;
  function useMemo<T>(factory: () => T, deps: React.DependencyList): T;
  function useReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): [S, (action: A) => void];
  function useContext<T>(context: React.Context<T>): T;

  const StrictMode: FC;
  const Fragment: FC;

  type DependencyList = ReadonlyArray<any>;

  interface MutableRefObject<T> {
    current: T;
  }

  type Context<T> = {
    Provider: React.FC<{ value: T; children?: React.ReactNode }>;
    Consumer: React.FC<{ children: (value: T) => React.ReactNode }>;
  };

  function createContext<T>(defaultValue: T): React.Context<T>;
  function createElement<P extends object>(type: React.ElementType<P>, props?: P & React.Attributes, ...children: React.ReactNode[]): React.ReactElement<P>;

  type ElementType<P = any> = 
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<P>;

  type ReactNode = React.ReactElement | string | number | boolean | null | undefined | React.ReactNode[];

  type Attributes = {
    key?: React.Key;
  };

  type ReactElement<P = any> = {
    type: React.ElementType<P>;
    props: P;
    key: React.Key | null;
  };

  type JSXElementConstructor<P> = 
    | ((props: P) => React.ReactElement | null)
    | (new (props: P) => React.Component<any, any>);

  type Key = string | number;
}

declare namespace JSX {
  interface Element extends React.ReactElement<any> {}
  interface ElementClass extends React.Component<any, any> {}
  interface ElementAttributesProperty {
    props: any;
  }
  interface ElementChildrenAttribute {
    children: any;
  }

  interface IntrinsicElements {
    [key: string]: any;
    a: any;
    button: any;
    div: any;
    span: any;
    img: any;
    input: any;
    form: any;
    select: any;
    option: any;
    textarea: any;
    header: any;
    main: any;
    section: any;
    nav: any;
    footer: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    p: any;
    label: any;
    ul: any;
    ol: any;
    li: any;
  }
}

declare module "react" {
  export = React;
}

declare module "react/jsx-runtime" {
  export function jsx(type: React.ElementType, props: any, key?: string | number): React.ReactElement;
  export function jsxs(type: React.ElementType, props: any, key?: string | number): React.ReactElement;
  export const Fragment: React.FC;
}
