import ExampleCard from '../components/ExampleCard'

function StudyEfficiency() {
  const studyExamples = [
    {
      id: 'math-problem',
      title: '数学の問題解説',
      prompt: '二次関数 y = x² - 4x + 3 の頂点と軸の方程式を求めて、グラフの書き方も教えてください',
      result: '二次関数の頂点と軸を求め、グラフの描き方を解説します：',
      details: [
        '平方完成：y = (x - 2)² - 1',
        '頂点の座標：(2, -1)',
        '軸の方程式：x = 2',
        'x切片：x = 1, 3（y = 0を代入）',
        'y切片：y = 3（x = 0を代入）',
        'グラフ：下に凸の放物線、頂点(2,-1)を通る'
      ]
    },
    {
      id: 'english-essay',
      title: '英作文の添削',
      prompt: '「My Dream」というテーマで書いた英作文を添削してください。"I want to be doctor. Because I like help people who sick."',
      result: '英作文を添削し、改善案を提示しました：',
      details: [
        '原文：I want to be doctor.',
        '修正：I want to be a doctor.（冠詞"a"が必要）',
        '原文：Because I like help people who sick.',
        '修正：Because I like helping people who are sick.',
        '文法ポイント：like + 動名詞(ing)、関係代名詞の後にbe動詞',
        'より自然な表現：My dream is to become a doctor and help those in need.'
      ]
    },
    {
      id: 'history-summary',
      title: '歴史の要点整理',
      prompt: '明治維新について、テストに出やすいポイントを年号付きでまとめてください。人物関係図も作ってください',
      result: '明治維新の重要ポイントと人物相関をまとめました：',
      details: [
        '1853年：ペリー来航（黒船）',
        '1867年：大政奉還（徳川慶喜→明治天皇）',
        '1868年：王政復古の大号令、戊辰戦争開始',
        '1871年：廃藩置県',
        '1872年：学制公布、鉄道開通（新橋-横浜）',
        '重要人物：西郷隆盛、大久保利通、木戸孝允（維新三傑）',
        '坂本龍馬：薩長同盟の仲介役'
      ]
    },
    {
      id: 'exam-prep',
      title: '資格試験対策',
      prompt: '簿記3級の仕訳問題を5問作って、解答と解説もつけてください。難易度は本試験レベルでお願いします',
      result: '簿記3級の実践問題を作成しました（解答・解説付き）：',
      details: [
        '問1：現金100,000円で商品を仕入れた',
        '解答：(借)仕入 100,000 / (貸)現金 100,000',
        '問2：売掛金50,000円を現金で回収した',
        '解答：(借)現金 50,000 / (貸)売掛金 50,000',
        '問3：給料200,000円を普通預金から支払った',
        '解答：(借)給料 200,000 / (貸)普通預金 200,000',
        'ポイント：借方と貸方の金額は必ず一致させる'
      ]
    }
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>学生の方向け活用法</h1>
        <p className="page-subtitle">
          資格勉強や受験対策をGensparkで効率化！中学生から大学生まで活用できます
        </p>
      </div>

      <section className="detailed-examples-section">
        <h2>📝 実際の学習での活用例</h2>
        <p className="section-description">
          実際の勉強でどのようにGensparkを活用できるか、具体的な例をご覧ください
        </p>
        <ExampleCard examples={studyExamples} />
      </section>

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