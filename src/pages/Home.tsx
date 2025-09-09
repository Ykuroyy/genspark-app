import { Link } from 'react-router-dom'
import ExampleCard from '../components/ExampleCard'

function Home() {
  const realExamples = [
    {
      id: 'excel',
      title: 'Excel業務',
      prompt: '売上データ.xlsxから月別の売上推移グラフを作成して、前年同月比も計算してください',
      result: 'Excelファイルを解析し、月別売上グラフと前年比較表を作成しました',
      details: [
        '1月: 売上150万円（前年比+15%）',
        '2月: 売上180万円（前年比+22%）',
        '3月: 売上200万円（前年比+18%）',
        'グラフはPowerPointに挿入可能な形式で保存しました'
      ]
    },
    {
      id: 'email',
      title: 'メール作成',
      prompt: '取引先に納期遅延のお詫びメールを書いてください。遅延は3日間で、代替案も提示したいです',
      result: '以下のビジネスメールを作成しました：',
      details: [
        '件名：【重要】納期遅延のお詫びと代替案のご提案',
        '冒頭：深くお詫び申し上げます',
        '遅延理由：簡潔に説明',
        '代替案：優先配送・割引提案',
        '今後の対策：再発防止策を明記'
      ]
    },
    {
      id: 'study',
      title: '試験対策',
      prompt: '日本史の鎌倉時代について、年表形式でまとめて、重要人物も教えてください',
      result: '鎌倉時代の完全年表と人物相関図を作成しました',
      details: [
        '1185年：源頼朝が守護・地頭を設置',
        '1192年：源頼朝が征夷大将軍に',
        '1221年：承久の乱（後鳥羽上皇vs北条義時）',
        '1232年：御成敗式目の制定',
        '重要人物：源頼朝、北条政子、北条義時、源義経'
      ]
    }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">AIエージェント「Genspark」で<br />仕事も勉強も効率化！</h2>
          <p className="hero-subtitle">
            プログラミング知識ゼロでも大丈夫。<br />
            あなたの日常をAIがサポートします。
          </p>
        </div>
      </section>

      <section className="what-is-genspark">
        <h2>Gensparkとは？</h2>
        <div className="explanation-card">
          <p>
            Gensparkは、対話形式で様々なタスクを自動化できるAIエージェントです。
            難しい専門知識は不要！日本語で指示するだけで、AIがあなたの作業を代行します。
          </p>
        </div>
      </section>

      <section className="use-cases">
        <h2>こんなことができます</h2>
        <div className="cards-grid">
          <Link to="/office" className="use-case-card">
            <div className="card-icon">💼</div>
            <h3>事務職の方へ</h3>
            <ul>
              <li>Excel作業の自動化</li>
              <li>メール文章の作成</li>
              <li>資料作成のサポート</li>
              <li>データ整理・分析</li>
            </ul>
            <span className="card-link">詳しく見る →</span>
          </Link>

          <Link to="/study" className="use-case-card">
            <div className="card-icon">📚</div>
            <h3>学生の方へ</h3>
            <ul>
              <li>要点まとめ作成</li>
              <li>暗記カード生成</li>
              <li>問題集の作成</li>
              <li>レポート構成の提案</li>
            </ul>
            <span className="card-link">詳しく見る →</span>
          </Link>

          <Link to="/other" className="use-case-card">
            <div className="card-icon">🌟</div>
            <h3>その他の活用法</h3>
            <ul>
              <li>プレゼン資料作成</li>
              <li>翻訳・要約</li>
              <li>スケジュール管理</li>
              <li>創作活動のサポート</li>
            </ul>
            <span className="card-link">詳しく見る →</span>
          </Link>
        </div>
      </section>

      <section className="real-examples">
        <h2>実際の使用例を見てみましょう</h2>
        <p className="section-subtitle">
          クリックして、実際にGensparkがどのように回答するか確認できます
        </p>
        <ExampleCard examples={realExamples} />
      </section>

      <section className="getting-started">
        <h2>始め方は簡単3ステップ</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Gensparkにアクセス</h3>
            <p>ブラウザからGensparkのサイトにアクセスします</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>やりたいことを入力</h3>
            <p>日本語で「〜をしたい」と入力するだけ</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>AIが自動で実行</h3>
            <p>AIがあなたの指示を理解して作業を代行します</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home