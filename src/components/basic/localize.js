import LocalizedStrings from 'react-localization';
export const loc = new LocalizedStrings({
 en:{
   russia: "Russia",
   et_markets: "Markets",
   rubcorpbonds_sovereign: "Sovereign",
   world_fx_market: "Main FX Rates",
   top_menu_world:"World",
   world_commodity : "Commodities",
   log_in: "Log in",
   log_out: "Log out",
   et_title: "Oops, you haven't added any instruments to your dashboard yet :(",
   et_desc1: "To add instruments go to the menu",
   search:"Tab to search...",
   login:"login",
   pass:"password",
   searchRes: "Search results:",
   searchResZero: "No results, change your search parameters",
   authError: "Login or password incorect",
   quotes: "Quotes",
   rssnews: "News",
   hiddenRes: "Sign in to see the hidden results"
 },
 ru: {
   russia: "Россия",
   et_markets: "Рынки",
   rubcorpbonds_sovereign: "Суверенные",
   world_fx_market: "Основные валюты",
   top_menu_world:"Мир",
   world_commodity : "Ресурсные рынки",
   log_in: "Войти",
   log_out: "Выход",
   et_title :"Ни один инструмент пока не открыт ((",
   et_desc1:"Добавить интересующие вас инструменты можно с помощью меню",
   search:"Поиск...",
   login:"логин",
   pass:"пароль",
   searchRes: "Результаты поиска:",
   searchResZero: "Нет результатов, измените параметры поиска",
   authError: "Неверный логин или пароль",
   quotes: "Котировки",
   rssnews: "Новости",
   hiddenRes: "Авторизуйтесь, чтобы просмотреть скрытые результаты"
 }
});
if(localStorage.getItem('lang')) {
   loc.setLanguage(localStorage.getItem('lang'))
} else {
   loc.setLanguage('ru');
   localStorage.setItem('lang','ru');
}
