import Node from "../components/Latex";
import Provider from "../components/Latex/Provider";

export default function Home() {
  return (
    <Provider>
      <Node>(x^2 + y^2 = z^2)</Node>
      <Node>E=mc^2</Node>
      <Node>
        {`
          L_{\\mathcal T}(\\vec{\\lambda}) = \\sum_{(\\mathbf{x},\\mathbf{s})\\in \\mathcal T}
          \\log P(\\mathbf{s}\\mid\\mathbf{x}) - \\sum_{i=1}^m
          \\frac{\\lambda_i^2}{2\\sigma^2}
       `}
      </Node>
      <Node>{`L' = {L}{\\sqrt{1-\\frac{v^2}{c^2}}} `}</Node>
      <Node>{`
        B' =-\\nabla \\times E, E' =\\nabla \\times B - 4\\pi j,
      `}</Node>
      <Node>{`
        \\lim_{x\\to 0}{\\frac{e^x-1}{2x}}
        \\overset{\\left[\\frac{0}{0}\\right]}{\\underset{\\mathrm{H}}{=}}
        \\lim_{x\\to 0}{\\frac{e^x}{2}}={\\frac{1}{2}}
      `}</Node>

    </Provider>
  )
}
