# 臺大樹語

## 簡介

改造原本的[臺大樹語](https://map.ntu.edu.tw/ntutree/index.htm)網站

## 使用說明

- 直接點擊地圖上的樹木 icon 可以查看樹木的簡介，之後可以更進一步點擊「保護我」，或是「了解更多」。點擊「保護我」將進到捐款畫面，點擊「了解更多」後，將會看到詳細資訊，可以在上面瀏覽樹種百科以及樹的個資
- 若是想要依分類搜尋樹木，可以點擊畫面左邊的浮動按鈕群，可以依樹種、季節、校區等進行分類。

## 技術運用、客製化元件與 Dependencies

主要使用 Google Map, React, Material-ui 來完成主要功能。

### [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)

剛開始最複雜的功能，Google 的 Api 都寫得很複雜，文件也很複雜，剛開始用弄懂花了很大的心力。後來使用了 [google-map-react](https://github.com/google-map-react/google-map-react) 來加速開發，弄懂也花了一些時間。除此之外，還要擔心 Api Key 的安全性，避免被別人濫用，放到 Github Page 上好像滿危險的。

### `!樹的資料

從舊的網站透過 console 中的 network 爬了樹的資料。

### 自製元件：Floating Action Menu (FAM)

除了使用 Material-ui 提供的元件外，我自己創造了一個 Floating Action Menu(FAM)，主要基於 [FAB](https://material-ui.com/components/floating-action-button/#floating-action-button) 跟 [Speed Dial](https://material-ui.com/components/speed-dial/#speed-dial) 的延伸，FAM 正是畫面左邊的幾個導覽圈圈，作為篩選樹木用。

### 懸浮資訊卡

懸浮資訊卡（Hover 時會出現的簡介）的功能也是做了一段時間，本來想要直接寫在 icon 的下面，但是這樣做有很多缺點，最後決定用 [Popper（基於 Popper.js）](https://material-ui.com/components/popper/#popper) 來實現，效果滿好的。

### Carousel

比較了很多 React 的 carousel，最後選用跟 React 比較合有比較好看的 [react-responsive-carouse](https://www.npmjs.com/package/react-responsive-carousel)

### Image API

unsplash

### UI 框架

## 特色、亮點
