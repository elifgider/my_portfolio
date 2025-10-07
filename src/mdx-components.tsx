import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-8 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold text-zinc-800 mt-6 mb-3 border-b border-zinc-200 pb-1" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold text-zinc-800 mt-5 mb-2" {...props} />
    ),
    p: (props) => <p className="text-zinc-700 leading-relaxed mb-3" {...props} />,
    strong: (props) => <strong className="font-semibold text-zinc-900" {...props} />,
    li: (props) => <li className="mb-1 text-zinc-700" {...props} />,
    
    // Kod blokları styling
    pre: (props) => (
      <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono" {...props} />
    ),
    code: (props) => {
      const { className, children, ...rest } = props
      
      // Eğer pre içindeyse (kod bloku), syntax highlighting uygula
      if (className?.includes('language-')) {
        return (
          <code 
            className={`${className} text-zinc-100`}
            {...rest}
          >
            {children}
          </code>
        )
      }
      
      // Inline kod için
      return (
        <code 
          className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono"
          {...rest}
        >
          {children}
        </code>
      )
    },

    ...components,
  }
}