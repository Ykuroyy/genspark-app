function StudyEfficiency() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>学生の方向け活用法</h1>
        <p className="page-subtitle">
          資格勉強や受験対策をGensparkで効率化！中学生から大学生まで活用できます
        </p>
      </div>

      <section className="feature-section">
        <h2>📖 要点まとめの自動作成</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>教科書の重要ポイントを箇条書きで整理</li>
              <li>長文を短くわかりやすく要約</li>
              <li>複雑な内容を図解で説明</li>
              <li>テスト前の総復習ノート作成</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例（中学生向け）</h4>
            <p className="example-prompt">
              「歴史の鎌倉時代について、テストに出そうな重要ポイントをまとめてください」
            </p>
            <p className="example-result">
              → 年号、重要人物、主な出来事を分かりやすく整理した要点集を作成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>🎯 暗記カード・問題集の生成</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>英単語の暗記カード作成</li>
              <li>漢字の読み書き問題集</li>
              <li>理科・社会の一問一答</li>
              <li>数学の類題自動生成</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例（高校生向け）</h4>
            <p className="example-prompt">
              「英検2級レベルの英単語で暗記カードを20枚作ってください」
            </p>
            <p className="example-result">
              → 単語、意味、例文がセットになった暗記カードを自動生成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>📊 資格試験対策</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>過去問の傾向分析</li>
              <li>苦手分野の克服プラン作成</li>
              <li>模擬試験問題の作成</li>
              <li>学習スケジュールの立案</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例（資格勉強）</h4>
            <p className="example-prompt">
              「簿記3級の仕訳問題を10問作成して、解説もつけてください」
            </p>
            <p className="example-result">
              → 実際の試験形式に近い問題と詳しい解説を生成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>✍️ レポート・論文作成サポート</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>レポートの構成案作成</li>
              <li>参考文献の整理</li>
              <li>論文の要約作成</li>
              <li>プレゼン資料の作成支援</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例（大学生向け）</h4>
            <p className="example-prompt">
              「環境問題についてのレポート構成を提案してください（2000字程度）」
            </p>
            <p className="example-result">
              → 序論・本論・結論の構成と、各章で書くべき内容を提案
            </p>
          </div>
        </div>
      </section>

      <section className="grade-specific">
        <h2>🎓 学年別おすすめ活用法</h2>
        <div className="grade-cards">
          <div className="grade-card">
            <h3>中学生</h3>
            <ul>
              <li>定期テスト対策の要点整理</li>
              <li>英語の文法説明</li>
              <li>数学の解き方解説</li>
              <li>読書感想文の構成作り</li>
            </ul>
          </div>
          <div className="grade-card">
            <h3>高校生</h3>
            <ul>
              <li>大学受験の過去問解説</li>
              <li>小論文の添削</li>
              <li>英語長文の和訳</li>
              <li>理系科目の公式整理</li>
            </ul>
          </div>
          <div className="grade-card">
            <h3>大学生</h3>
            <ul>
              <li>専門科目のレポート作成</li>
              <li>就活のES添削</li>
              <li>プログラミング学習</li>
              <li>資格試験対策</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>💡 効果的な使い方のコツ</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>分からないことは素直に聞く</h3>
            <p>「〜がわからないので、簡単に説明してください」と聞けば、レベルに合わせて解説します</p>
          </div>
          <div className="tip-card">
            <h3>例題をたくさん作ってもらう</h3>
            <p>「似た問題を5問作って」と頼めば、練習問題を無限に生成できます</p>
          </div>
          <div className="tip-card">
            <h3>間違えた問題は詳しく解説してもらう</h3>
            <p>なぜ間違えたのか、どう考えれば良いのかを丁寧に教えてもらいましょう</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyEfficiency