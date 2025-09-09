import { Link } from 'react-router-dom'

function Home() {
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