import UseCaseGallery from '../components/UseCaseGallery'

function OtherUseCases() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>その他の活用法</h1>
        <p className="page-subtitle">
          日常生活から専門的な作業まで、Gensparkの可能性は無限大です
        </p>
      </div>

      <UseCaseGallery />

      <section className="feature-section">
        <h2>🎨 創作活動のサポート</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>小説やブログのアイデア出し</li>
              <li>キャッチコピーの作成</li>
              <li>詩や俳句の創作</li>
              <li>イラストの構図提案</li>
              <li>動画の台本作成</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「春をテーマにした短い物語のアイデアを5つ提案してください」
            </p>
            <p className="example-result">
              → 独創的なストーリーアイデアと簡単なあらすじを提案
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>🌍 翻訳・言語学習</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>多言語間の翻訳（英語、中国語、韓国語など）</li>
              <li>ネイティブ表現の提案</li>
              <li>文法チェックと添削</li>
              <li>言語学習用の例文作成</li>
              <li>発音のカタカナ表記</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「『お疲れ様でした』を英語で自然に表現する方法を教えてください」
            </p>
            <p className="example-result">
              → シチュエーション別の適切な英語表現と使い分けを解説
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>💻 プログラミング・IT支援</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>コードの作成・デバッグ</li>
              <li>エラーメッセージの解説</li>
              <li>アルゴリズムの説明</li>
              <li>Webサイトの構築支援</li>
              <li>データベース設計の提案</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「Pythonで簡単な計算機プログラムを作ってください」
            </p>
            <p className="example-result">
              → 動作するコードと使い方の説明を提供
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>🏠 日常生活のサポート</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>料理レシピの提案・アレンジ</li>
              <li>旅行プランの作成</li>
              <li>家計簿の管理方法提案</li>
              <li>掃除・整理整頓のアドバイス</li>
              <li>健康管理のヒント</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「冷蔵庫にある卵、トマト、チーズで作れる料理を教えてください」
            </p>
            <p className="example-result">
              → 材料を活かした複数のレシピと作り方を提案
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>📈 ビジネス・起業支援</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>ビジネスプランの作成</li>
              <li>市場調査のサポート</li>
              <li>SWOT分析の実施</li>
              <li>マーケティング戦略の立案</li>
              <li>財務計画の作成支援</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「カフェを開業するための事業計画書の構成を教えてください」
            </p>
            <p className="example-result">
              → 必要な項目と記載すべき内容を体系的に提示
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>🎯 専門分野での活用</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>法律相談の下調べ</li>
              <li>医療情報の整理（※診断は行いません）</li>
              <li>建築・設計のアイデア出し</li>
              <li>音楽制作のアドバイス</li>
              <li>スポーツトレーニングメニューの作成</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「初心者向けの1週間の筋トレメニューを作成してください」
            </p>
            <p className="example-result">
              → 部位別のトレーニングメニューと注意点を詳しく解説
            </p>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <h2>🏢 業界別活用例</h2>
        <div className="industry-grid">
          <div className="industry-card">
            <h3>教育</h3>
            <p>授業計画作成、教材開発、評価基準の設定</p>
          </div>
          <div className="industry-card">
            <h3>医療・福祉</h3>
            <p>症例報告書作成、患者向け説明資料、介護計画立案</p>
          </div>
          <div className="industry-card">
            <h3>不動産</h3>
            <p>物件説明文作成、契約書類の整理、市場分析</p>
          </div>
          <div className="industry-card">
            <h3>製造業</h3>
            <p>作業手順書作成、品質管理チェックリスト、改善提案</p>
          </div>
          <div className="industry-card">
            <h3>小売・サービス</h3>
            <p>商品説明文、キャンペーン企画、顧客対応マニュアル</p>
          </div>
          <div className="industry-card">
            <h3>金融</h3>
            <p>市場レポート作成、リスク分析、投資提案書作成</p>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>💡 Genspark活用の極意</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>継続的な対話</h3>
            <p>一度で完璧を求めず、対話を重ねて理想の結果に近づけましょう</p>
          </div>
          <div className="tip-card">
            <h3>具体例を提示</h3>
            <p>「〜のような形式で」と具体例を示すと、期待通りの結果が得やすくなります</p>
          </div>
          <div className="tip-card">
            <h3>フィードバックを活用</h3>
            <p>「もっと〜にして」「〜の部分を修正して」と指示すれば、改善してくれます</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OtherUseCases