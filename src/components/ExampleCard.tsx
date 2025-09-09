import { useState } from 'react'

interface Example {
  id: string
  title: string
  prompt: string
  result: string
  details?: string[]
}

interface ExampleCardProps {
  examples: Example[]
}

function ExampleCard({ examples }: ExampleCardProps) {
  const [selectedExample, setSelectedExample] = useState<string>(examples[0]?.id)

  const currentExample = examples.find(ex => ex.id === selectedExample)

  return (
    <div className="example-showcase">
      <div className="example-tabs">
        {examples.map(example => (
          <button
            key={example.id}
            className={`example-tab ${selectedExample === example.id ? 'active' : ''}`}
            onClick={() => setSelectedExample(example.id)}
          >
            {example.title}
          </button>
        ))}
      </div>
      
      {currentExample && (
        <div className="example-content">
          <div className="example-prompt-section">
            <h4>あなたの指示</h4>
            <div className="prompt-box">
              {currentExample.prompt}
            </div>
          </div>
          
          <div className="example-arrow">→</div>
          
          <div className="example-result-section">
            <h4>Gensparkの回答</h4>
            <div className="result-box">
              {currentExample.result}
            </div>
            {currentExample.details && (
              <ul className="result-details">
                {currentExample.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExampleCard