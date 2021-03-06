(async () => {
  if (document.URL.replace(location.search, '') !== 'https://t.bilibili.com/') {
    return
  }
  const leftPanel = await SpinQuery.select('.home-container .left-panel .scroll-content')
  if (leftPanel === null) {
    return
  }
  leftPanel.insertAdjacentHTML('afterbegin', html`<feeds-filter-card></feeds-filter-card>`)
  new Vue({
    el: 'feeds-filter-card',
    components: {
      FeedsFilterCard: () => import('./feeds-filter-card.vue'),
    },
  })
})()
export default {
  reload: () => document.body.classList.remove('disable-feeds-filter'),
  unload: () => document.body.classList.add('disable-feeds-filter'),
}