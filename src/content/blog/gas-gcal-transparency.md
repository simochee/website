---
title: GAS で Google カレンダーの「予定あり」「予定なし」を操作する
pubDate: 2023-09-08
draft: false
---

## transparency プロパティ

Google カレンダーのイベントに設定できる「予定あり」「予定なし」の項目は、 Google Calendar API 上では `transparency` という名前で扱われています。

https://developers.google.com/calendar/api/v3/reference/events?hl=ja

説明を見るには、「予定あり」＝「他の予定をブロックする」＝「実体がある」、「予定なし」＝「他の予定をブロックしない」＝「実体がない」というニュアンスとして `transparency` （透明性）という命名になっているようです。

## GAS から transparency を変更する

GAS でデフォルトで利用できる `CalendarApp` には `transparency` を変更する機能がありません。

そのため、 `Calendar` ライブラリを別途有効にする必要があります。

https://auto-worker.com/blog/?p=4430

GAS を実行したアカウントのデフォルトカレンダーのあるイベントを「予定なし」に変更するコードは次のとおりです。

```js:コード.gs
const defaultCalendar = CalendarApp.getDefaultCalendar();

Calendar.Events.patch(
  { transparency: 'transparent' /* or 'opaque' */ },
  defaultCalendar.getId(),
  '<event id>',
);
```

## Recipe: 取得したイベントのうち、自分以外が参加していない予定を「予定なし」にする

```js:コード.gs
function main() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8);
  // 今日を含めて8日分のイベント
  const events = calendar.getEvents(startDate, endDate);

  for (const event of events) {
    const calendarId = calendar.getId();
    // event.getId() は通常、 <event_id>@google.com の形式なので @ 以降を取り除いたものをイベントIDとして扱う
    const eventId = event.getId().replace(/@.+$/, '');

    if (event.getGuestList().length === 0) {
      // Calendar API 経由で transparency を更新
      Calendar.Events.patch({ transparency: 'transparent' }, calendarId, eventId);
    }
  }
}
```

## 参考にしたサイト

- https://dackdive.hateblo.jp/entry/2015/07/31/182321