# QuickPeek LP ABテスト実装状況・引き継ぎメモ

**宛先**: GA4/GTM 担当者様
**作成日**: 2026-01-09
**プロジェクト**: QuickPeek Landing Page

## ✅ 実装済みのコード修正 (Frontend)

以下の実装は完了しており、ローカル環境でのイベント発火を確認済みです。

1.  **GTMタグの埋め込み (index.html)**
    *   `<header>` および `<body>` 直下にGTMスニペットを配置しました。
    *   ⚠️ **注意**: コンテナIDは現在プレースホルダー `GTM-PLACEHOLDER` になっています。**本番のコンテナIDへの置換が必要です。**

2.  **ABテストロジックの実装 (useABTest.js)**
    *   ユーザー初回訪問時にランダムに `A` (Control) または `B` (Variant) を割り当てます。
    *   割り当て結果は `localStorage` に保存され、再訪問時も同じバリアントが維持されます。

3.  **DataLayer イベント実装**
    *   **実験開始 (割り当て時)**:
        ```javascript
        dataLayer.push({
          'event': 'ab_test',
          'experiment_id': 'headline_test_v1', // 実験ID
          'variant': 'A'                       // 'A' or 'B'
        });
        ```
    *   **コンバージョン (ボタンクリック時)**:
        *   HeroセクションおよびPricingセクションの「Download / Start Free Trial」ボタンで発火します。
        ```javascript
        dataLayer.push({
          'event': 'cta_click',
          'experiment_id': 'headline_test_v1',
          'variant': 'A',
          'label': 'Hero' // または 'Pricing_Trial_Main'
        });
        ```

---

### 3. テスト内容 (Specification)
**Experiment ID**: `headline_test_v1`

| Variant | 表示内容 (Hero Title) | 狙い |
| :--- | :--- | :--- |
| **A (Control)** | **Instant Looking** | 機能訴求: 「瞬時に見れる」というアプリのコア価値を端的に表現。 |
| **B (Treatment)** | **Stop Searching. Just Peek.** | ベネフィット訴求: 「探す手間を省く」というユーザー課題に焦点を当てた表現。 |

---

## 🛠 今後必要な設定作業 (GTM/GA4 Admin)

管理画面側で以下の設定をお願いいたします。

### 1. GTM (Google Tag Manager)
1.  **コンテナID設定**:
    *   提供いただいたID (`GTM-TT6V9C9Z`) を `index.html` に反映済みです。
2.  **設定インポート**:
    *   共有済みの `GTM_AB_TEST_CONFIG.json` をインポートしてください。
3.  **変数設定**:
    *   インポート後、GTM変数 `GA4 Measurement ID` を QuickPeek の測定ID (`G-04N3PMMCEH`) に更新してください。

### 2. GA4 (Google Analytics 4)
データを受信するために、以下のカスタムディメンションを作成してください。

| ディメンション名 | 範囲 | イベントパラメータ |
| :--- | :--- | :--- |
| `experiment_id` | イベント | `experiment_id` |
| `variant` | イベント | `variant` |

---
以上です。よろしくお願いいたします。
