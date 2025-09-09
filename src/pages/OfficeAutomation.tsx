import ExampleCard from '../components/ExampleCard'

function OfficeAutomation() {
  const detailedExamples = [
    {
      id: 'sales-report',
      title: '売上レポート自動化',
      prompt: '全国50店舗の日次売上データから、地域別・商品カテゴリ別の月次レポートを作成してください。特に売上が低下している店舗を特定して改善提案も含めてください',
      result: '月次売上分析レポートを作成しました。以下の内容を含みます：',
      details: [
        '地域別売上：関東35%、関西28%、中部20%、その他17%',
        'カテゴリ別：食品45%、日用品30%、衣料品25%',
        '要注意店舗：新宿店（前月比-15%）、梅田店（前月比-12%）',
        '改善提案：季節商品の入れ替え時期の最適化',
        'PowerBI連携用のデータセットも作成済み'
      ]
    },
    {
      id: 'meeting-minutes',
      title: '議事録の自動作成',
      prompt: 'Zoomの録画から議事録を作成してください。参加者5名、1時間の営業会議です。アクションアイテムと期限も整理してください',
      result: '会議録画を文字起こしし、構造化された議事録を作成しました：',
      details: [
        '議題1：Q3売上目標の進捗確認 → 達成率78%',
        '議題2：新商品ローンチ計画 → 10月15日リリース決定',
        'アクションアイテム：',
        '- 田中：顧客リスト更新（9/15まで）',
        '- 佐藤：プレゼン資料作成（9/20まで）',
        '- 山田：競合分析レポート（9/18まで）'
      ]
    },
    {
      id: 'customer-analysis',
      title: '顧客データ分析',
      prompt: '過去1年間の顧客購買データから、優良顧客を特定して、それぞれに最適なキャンペーンを提案してください',
      result: '顧客セグメント分析とキャンペーン提案を完了しました：',
      details: [
        'VIP顧客（上位5%）：年間購入額100万円以上、限定商品の先行案内',
        'リピーター（30%）：月1回以上購入、ポイント2倍キャンペーン',
        '新規顧客（20%）：初回購入から3ヶ月以内、次回15%OFFクーポン',
        '休眠顧客（15%）：6ヶ月以上未購入、復活特典20%OFF',
        'ROI予測：キャンペーン実施で売上15%増の見込み'
      ]
    }
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>事務職の方向け活用法</h1>
        <p className="page-subtitle">
          毎日の事務作業をGensparkで効率化しましょう
        </p>
      </div>

      <section className="detailed-examples-section">
        <h2>🎯 実際の業務での活用例</h2>
        <p className="section-description">
          実際の業務でどのようにGensparkを活用できるか、具体的な例をご覧ください
        </p>
        <ExampleCard examples={detailedExamples} />
      </section>

      <section className="feature-section">
        <h2>📊 Excel作業の自動化</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>大量のデータを自動で整理・集計</li>
              <li>複数のExcelファイルを一括で処理</li>
              <li>グラフや表の自動作成</li>
              <li>定型フォーマットへの自動入力</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「売上データから月別の集計表を作成して、グラフも追加してください」
            </p>
            <p className="example-result">
              → Gensparkが自動でデータを分析し、見やすい集計表とグラフを作成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>✉️ メール文章の作成サポート</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>ビジネスメールのテンプレート作成</li>
              <li>お詫びや依頼メールの文章生成</li>
              <li>英語メールの作成・翻訳</li>
              <li>長文メールの要約</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「会議の日程変更をお知らせする丁寧なメールを書いてください」
            </p>
            <p className="example-result">
              → 適切な敬語を使った、プロフェッショナルなメール文章を生成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>📝 資料作成のサポート</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>会議資料の構成提案</li>
              <li>報告書のテンプレート作成</li>
              <li>プレゼン資料の要点整理</li>
              <li>議事録の自動作成</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「月次売上報告書のテンプレートを作成してください」
            </p>
            <p className="example-result">
              → 必要な項目が整理された、使いやすいテンプレートを自動生成
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <h2>🗂️ データ整理・分析</h2>
        <div className="feature-content">
          <div className="feature-description">
            <h3>こんなことができます</h3>
            <ul>
              <li>顧客データの整理・分類</li>
              <li>売上データの分析とレポート作成</li>
              <li>在庫管理表の自動更新</li>
              <li>アンケート結果の集計・分析</li>
            </ul>
          </div>
          <div className="example-box">
            <h4>使用例</h4>
            <p className="example-prompt">
              「顧客リストを地域別・業種別に分類して、それぞれの売上を集計してください」
            </p>
            <p className="example-result">
              → 複雑なデータ処理も自動で実行し、分かりやすい形で出力
            </p>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>💡 活用のコツ</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>具体的に指示する</h3>
            <p>「〜のデータを〜の形式で」など、具体的に指示するとより良い結果が得られます</p>
          </div>
          <div className="tip-card">
            <h3>段階的に依頼する</h3>
            <p>複雑な作業は、小さなステップに分けて依頼すると確実です</p>
          </div>
          <div className="tip-card">
            <h3>テンプレートを活用</h3>
            <p>よく使う処理はテンプレート化して、繰り返し利用しましょう</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OfficeAutomation