import { useState } from 'react'

interface UseCase {
  category: string
  icon: string
  examples: {
    title: string
    description: string
  }[]
}

function UseCaseGallery() {
  const [selectedCategory, setSelectedCategory] = useState('daily')

  const useCases: Record<string, UseCase> = {
    daily: {
      category: '日常業務',
      icon: '💼',
      examples: [
        {
          title: '会議の議事録作成',
          description: 'Zoom録画から自動で議事録を作成、アクションアイテムも整理'
        },
        {
          title: 'メール返信の下書き',
          description: '受信メールの内容を理解して、適切な返信文を作成'
        },
        {
          title: 'スケジュール調整',
          description: '複数人の予定を考慮して、最適な会議時間を提案'
        },
        {
          title: '報告書の作成',
          description: 'データから月次・週次報告書を自動生成'
        }
      ]
    },
    creative: {
      category: 'クリエイティブ',
      icon: '🎨',
      examples: [
        {
          title: 'SNS投稿文の作成',
          description: 'ターゲットに合わせた魅力的な投稿文とハッシュタグを生成'
        },
        {
          title: 'プレゼン資料の構成',
          description: 'テーマに沿った効果的なスライド構成を提案'
        },
        {
          title: 'ブログ記事の執筆',
          description: 'SEOを意識した構成で、読みやすい記事を作成'
        },
        {
          title: 'キャッチコピー作成',
          description: '商品やサービスの特徴を活かした印象的なコピーを提案'
        }
      ]
    },
    analysis: {
      category: 'データ分析',
      icon: '📊',
      examples: [
        {
          title: '売上データの分析',
          description: 'CSVファイルから傾向を分析し、改善提案を作成'
        },
        {
          title: 'アンケート結果の集計',
          description: '回答データを自動集計し、グラフ化して報告書作成'
        },
        {
          title: '競合分析レポート',
          description: '複数の競合他社の特徴を比較分析'
        },
        {
          title: 'KPI ダッシュボード作成',
          description: '重要指標を可視化するダッシュボードの設計'
        }
      ]
    },
    learning: {
      category: '学習支援',
      icon: '📚',
      examples: [
        {
          title: '単語帳の自動生成',
          description: '教科書から重要単語を抽出して暗記カードを作成'
        },
        {
          title: '練習問題の作成',
          description: '理解度に合わせた難易度の問題を無限に生成'
        },
        {
          title: '論文の要約',
          description: '長い論文を読みやすい要点にまとめる'
        },
        {
          title: '学習計画の立案',
          description: '目標と期限から最適な学習スケジュールを作成'
        }
      ]
    },
    programming: {
      category: 'プログラミング',
      icon: '💻',
      examples: [
        {
          title: 'コードのデバッグ',
          description: 'エラーメッセージから原因を特定し、修正方法を提案'
        },
        {
          title: 'API連携の実装',
          description: '外部サービスとの連携コードを生成'
        },
        {
          title: 'データベース設計',
          description: '要件に基づいて最適なテーブル構造を設計'
        },
        {
          title: 'テストコードの作成',
          description: '既存コードに対する単体テストを自動生成'
        }
      ]
    },
    personal: {
      category: '個人活用',
      icon: '🏠',
      examples: [
        {
          title: '献立の提案',
          description: '冷蔵庫の食材から1週間分の献立を作成'
        },
        {
          title: '旅行プランの作成',
          description: '予算と日程に合わせた観光ルートを提案'
        },
        {
          title: '家計簿の分析',
          description: '支出データから節約ポイントをアドバイス'
        },
        {
          title: 'トレーニングメニュー',
          description: '目標に合わせた運動プログラムを作成'
        }
      ]
    }
  }

  return (
    <div className="use-case-gallery">
      <div className="gallery-header">
        <h2>こんなことができます</h2>
        <p>カテゴリーを選んで、具体的な活用例をチェック</p>
      </div>

      <div className="category-selector">
        {Object.entries(useCases).map(([key, useCase]) => (
          <button
            key={key}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(key)}
          >
            <span className="category-icon">{useCase.icon}</span>
            <span className="category-name">{useCase.category}</span>
          </button>
        ))}
      </div>

      <div className="examples-grid">
        {useCases[selectedCategory].examples.map((example, index) => (
          <div key={index} className="example-card">
            <h3>{example.title}</h3>
            <p>{example.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseCaseGallery