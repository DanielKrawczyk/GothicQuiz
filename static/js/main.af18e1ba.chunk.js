(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{15:function(e,a,i){},16:function(e,a,i){"use strict";i.r(a);var s=i(2),o=i.n(s),t=i(9),n=i.n(t),l=i(3),r=i(4),c=i(6),d=i(5),z=i(1),u=i.n(z),f=i(7),m=i(0),w=function(e){Object(c.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={points:0,nr:0,dialogue:""},e.handleShowNextQuestion=function(a){if(!0===a){var i=e.state.points;i++,e.setState({points:i})}if(24===e.state.nr)return e.handleShowProperDialogue(),u()(".result.hidden").removeClass("hidden"),void u()(".quiz").addClass("hidden");var s=e.state.nr;s++,e.setState({nr:s})},e.handleShowProperDialogue=function(){var a=e.state.points;24===a?e.setState({dialogue:"Pyrokar: To niesamowite! Czy Ty masz poj\u0119cie jak wielkim fanem Gothica jeste\u015b?"}):a<5?e.setState({dialogue:"Bulko: Znam ja takich jak Ty. Mocni tylko w g\u0119bie. Gardz\u0119 lud\u017ami, kt\xf3rzy stroj\u0105 si\u0119 jak paw i chwal\u0105 si\u0119 swoj\u0105 wiedz\u0105 o Gothicu!"}):a<10?e.setState({dialogue:"Saturas: Ale czy ja Ci\u0119 sk\u0105d\u015b znam... Oczywi\u015bcie... Ty sukinsynu! Nie my\u015bl, \u017ce zapomnieli\u015bmy jak chwali\u0142e\u015b si\u0119 swoj\u0105 wiedz\u0105 o Gothicu w Nowym Obozie!"}):a<15?e.setState({dialogue:"Vatras: A wi\u0119c jeste\u015b graczem... i gra\u0142e\u015b du\u017co w Gothica... i uwa\u017casz, \u017ce wiesz o nim wszystko... Mam wra\u017cenie, \u017ce nie m\xf3wisz mi ca\u0142ej prawdy."}):a<20?e.setState({dialogue:"Bosper: Dobra robota! Je\u015bli chcesz, mo\u017cesz zacz\u0105\u0107 prac\u0119 jako m\xf3j czeladnik ju\u017c od zaraz!"}):a<24&&e.setState({dialogue:"Gomez: Nie\u017ale jak na \u017c\xf3\u0142todzioba. Przyda si\u0119 nam kto\u015b taki jak Ty. Witaj w dru\u017cynie, ch\u0142opcze! Kruk wprowadzi Ci\u0119 w szczeg\xf3\u0142y."})},e.handleAgain=function(){u()(".quiz").removeClass("hidden"),u()(".result").addClass("hidden"),e.setState({nr:0})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)("div",{className:"quiz",children:[Object(m.jsxs)("div",{className:"quiz-question",children:[Object(m.jsxs)("h4",{children:["Pytanie nr ",this.state.nr+1," / 25"]}),Object(m.jsx)("p",{children:f.a.questions[this.state.nr]})]},"1"),Object(m.jsx)("div",{className:"quiz-answers",children:f.a.answers[this.state.nr].map((function(a){return Object(m.jsx)("p",{onClick:function(){return e.handleShowNextQuestion(a[1])},children:a[0]},a[0])}))},"2")]},"quiz"),Object(m.jsxs)("div",{className:"result hidden",children:[Object(m.jsx)("img",{src:"./images/title.png",alt:"Tytu\u0142 gry"}),Object(m.jsx)("div",{className:"result-title",children:Object(m.jsx)("h1",{children:"Gratuluj\u0119!"})}),Object(m.jsx)("div",{className:"result-points",children:Object(m.jsxs)("p",{children:["Zdobyte do\u015bwiadczenie: ",this.state.points,"00 / 2500 PD"]})}),Object(m.jsx)("div",{className:"result-dialogue",children:this.state.dialogue}),Object(m.jsxs)("div",{className:"result-buttons",children:[Object(m.jsx)("button",{onClick:function(){return e.handleAgain()},children:"Mo\u017cesz powt\xf3rzy\u0107?"}),Object(m.jsx)("button",{onClick:function(){return window.location.reload()},children:"KONIEC."})]})]})]})}}]),i}(s.Component),y=function(e){Object(c.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={points:0,nr:0,dialogue:""},e.handleShowNextQuestion=function(a){if(!0===a){var i=e.state.points;i++,e.setState({points:i})}if(24===e.state.nr)return e.handleShowProperDialogue(),u()(".result.hidden").removeClass("hidden"),void u()(".quiz").addClass("hidden");var s=e.state.nr;s++,e.setState({nr:s})},e.handleShowProperDialogue=function(){var a=e.state.points;24===a?e.setState({dialogue:"Pyrokar: To niesamowite! Czy Ty masz poj\u0119cie jak wielkim fanem Gothica jeste\u015b?"}):a<5?e.setState({dialogue:"Bulko: Znam ja takich jak Ty. Mocni tylko w g\u0119bie. Gardz\u0119 lud\u017ami, kt\xf3rzy stroj\u0105 si\u0119 jak paw i chwal\u0105 si\u0119 swoj\u0105 wiedz\u0105 o Gothicu!"}):a<10?e.setState({dialogue:"Saturas: Ale czy ja Ci\u0119 sk\u0105d\u015b znam... Oczywi\u015bcie... Ty sukinsynu! Nie my\u015bl, \u017ce zapomnieli\u015bmy jak chwali\u0142e\u015b si\u0119 swoj\u0105 wiedz\u0105 o Gothicu w Nowym Obozie!"}):a<15?e.setState({dialogue:"Vatras: A wi\u0119c jeste\u015b graczem... i gra\u0142e\u015b du\u017co w Gothica... i uwa\u017casz, \u017ce wiesz o nim wszystko... Mam wra\u017cenie, \u017ce nie m\xf3wisz mi ca\u0142ej prawdy."}):a<20?e.setState({dialogue:"Bosper: Dobra robota! Je\u015bli chcesz, mo\u017cesz zacz\u0105\u0107 prac\u0119 jako m\xf3j czeladnik ju\u017c od zaraz!"}):a<25&&e.setState({dialogue:"Gomez: Nie\u017ale jak na \u017c\xf3\u0142todzioba. Przyda si\u0119 nam kto\u015b taki jak Ty. Witaj w dru\u017cynie, ch\u0142opcze! Kruk wprowadzi Ci\u0119 w szczeg\xf3\u0142y."})},e.handleAgain=function(){u()(".quiz").removeClass("hidden"),u()(".result").addClass("hidden"),e.setState({nr:0})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)("div",{className:"quiz",children:[Object(m.jsxs)("div",{className:"quiz-question",children:[Object(m.jsxs)("h4",{children:["Pytanie nr ",this.state.nr+1," / 25"]}),Object(m.jsx)("p",{children:f.b.questions[this.state.nr]})]},"1"),Object(m.jsx)("div",{className:"quiz-answers",children:f.b.answers[0][this.state.nr].map((function(a){return Object(m.jsx)("p",{onClick:function(){return e.handleShowNextQuestion(a[1])},children:a[0]},a[0])}))},"2")]},"quiz"),Object(m.jsxs)("div",{className:"result hidden",children:[Object(m.jsx)("img",{src:"./images/gothic2.png",alt:"Tytu\u0142 gry"}),Object(m.jsx)("div",{className:"result-title",children:Object(m.jsx)("h1",{children:"Gratuluj\u0119!"})}),Object(m.jsx)("div",{className:"result-points",children:Object(m.jsxs)("p",{children:["Zdobyte do\u015bwiadczenie: ",this.state.points,"00 / 2500 PD"]})}),Object(m.jsx)("div",{className:"result-dialogue",children:this.state.dialogue}),Object(m.jsxs)("div",{className:"result-buttons",children:[Object(m.jsx)("button",{onClick:function(){return e.handleAgain()},children:"Mo\u017cesz powt\xf3rzy\u0107?"}),Object(m.jsx)("button",{onClick:function(){return window.location.reload()},children:"KONIEC."})]})]})]})}}]),i}(s.Component),j=function(e){Object(c.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={points:0,nr:0,dialogue:""},e.handleShowNextQuestion=function(a){if(!0===a){var i=e.state.points;i++,e.setState({points:i})}if(24===e.state.nr)return e.handleShowProperDialogue(),u()(".result.hidden").removeClass("hidden"),void u()(".quiz").addClass("hidden");var s=e.state.nr;s++,e.setState({nr:s})},e.handleShowProperDialogue=function(){var a=e.state.points;24===a?e.setState({dialogue:"Pyrokar: To niesamowite! Czy Ty masz poj\u0119cie jak wielkim fanem Gothica jeste\u015b?"}):a<5?e.setState({dialogue:"Bulko: Znam ja takich jak Ty. Mocni tylko w g\u0119bie. Gardz\u0119 lud\u017ami, kt\xf3rzy stroj\u0105 si\u0119 jak paw i chwal\u0105 si\u0119 swoj\u0105 wiedz\u0105 o Gothicu!"}):a<10?e.setState({dialogue:"Saturas: Ale czy ja Ci\u0119 sk\u0105d\u015b znam... Oczywi\u015bcie... Ty sukinsynu! Nie my\u015bl, \u017ce zapomnieli\u015bmy jak chwali\u0142e\u015b si\u0119 swoj\u0105 wiedz\u0105 o Gothicu w Nowym Obozie!"}):a<15?e.setState({dialogue:"Vatras: A wi\u0119c jeste\u015b graczem... i gra\u0142e\u015b du\u017co w Gothica... i uwa\u017casz, \u017ce wiesz o nim wszystko... Mam wra\u017cenie, \u017ce nie m\xf3wisz mi ca\u0142ej prawdy."}):a<20?e.setState({dialogue:"Bosper: Dobra robota! Je\u015bli chcesz, mo\u017cesz zacz\u0105\u0107 prac\u0119 jako m\xf3j czeladnik ju\u017c od zaraz!"}):a<24&&e.setState({dialogue:"Gomez: Nie\u017ale jak na \u017c\xf3\u0142todzioba. Przyda si\u0119 nam kto\u015b taki jak Ty. Witaj w dru\u017cynie, ch\u0142opcze! Kruk wprowadzi Ci\u0119 w szczeg\xf3\u0142y."})},e.handleAgain=function(){u()(".quiz").removeClass("hidden"),u()(".result").addClass("hidden"),e.setState({nr:0})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)("div",{className:"quiz",children:[Object(m.jsxs)("div",{className:"quiz-question",children:[Object(m.jsxs)("h4",{children:["Pytanie nr ",this.state.nr+1," / 25"]}),Object(m.jsx)("p",{children:f.c.questions[this.state.nr]})]},"1"),Object(m.jsx)("div",{className:"quiz-answers",children:f.c.answers[0][this.state.nr].map((function(a){return Object(m.jsx)("p",{onClick:function(){return e.handleShowNextQuestion(a[1])},children:a[0]},a[0])}))},"2")]},"quiz"),Object(m.jsxs)("div",{className:"result hidden",children:[Object(m.jsx)("img",{src:"./images/gothic3.png",alt:"Tytu\u0142 gry"}),Object(m.jsx)("div",{className:"result-title",children:Object(m.jsx)("h1",{children:"Gratuluj\u0119!"})}),Object(m.jsx)("div",{className:"result-points",children:Object(m.jsxs)("p",{children:["Zdobyte do\u015bwiadczenie: ",this.state.points,"00 / 2500 PD"]})}),Object(m.jsx)("div",{className:"result-dialogue",children:this.state.dialogue}),Object(m.jsxs)("div",{className:"result-buttons",children:[Object(m.jsx)("button",{onClick:function(){return e.handleAgain()},children:"Mo\u017cesz powt\xf3rzy\u0107?"}),Object(m.jsx)("button",{onClick:function(){return window.location.reload()},children:"KONIEC."})]})]})]})}}]),i}(s.Component),k=function(e){Object(c.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={count:0,selected:"",game:[Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("div",{className:"main-title",children:Object(m.jsx)("img",{src:"./images/title.png",alt:"Tytu\u0142 gry"},"1.1")},"1"),Object(m.jsxs)("div",{className:"main-options",children:[Object(m.jsx)("div",{onClick:function(){return e.handleChoice("gothic")},className:"main-options_item",children:"Gothic I"},"2.1"),Object(m.jsx)("div",{onClick:function(){return e.handleChoice("gothic2")},className:"main-options_item",children:"Gothic II"},"2.2"),Object(m.jsx)("div",{className:"main-options_item"},"2.3")]},"2"),Object(m.jsx)("div",{className:"main-info",children:"Wybierz quiz do pokonania!"},"3")]},"main"),Object(m.jsxs)("div",{className:"quiz-loading",children:[Object(m.jsx)("h1",{children:"WCZYTYWANIE"},"1"),Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("div",{className:"bar"},"2.1")},"2")]},"quiz-loading"),Object(m.jsx)(w,{}),Object(m.jsx)(y,{}),Object(m.jsx)(j,{})]},e.handleChoice=function(a){var i=a,s=e.state.count;s++,e.setState({selected:i,count:s}),e.handleDownloadQuestions(),e.handleLoadingBar()},e.handleDownloadQuestions=function(){switch(e.state.selected){case"gothic":e.setState({count:2});break;case"gothic2":e.setState({count:3});break;case"gothic3":e.setState({count:4})}},e.handleLoadingBar=function(){u()(".bar").animate({width:"75px"},100),setTimeout((function(){u()(".bar").animate({width:"125px"},1),setTimeout((function(){u()(".bar").animate({width:"210px"},2500),u()(".bar").animate({width:"250px"},10),setTimeout((function(){u()(".bar").animate({width:"285px"},200),setTimeout((function(){e.handleDownloadQuestions()}),3e3)}),3e3)}),1e3)}),1e3)},e}return Object(r.a)(i,[{key:"render",value:function(){return this.state.game[this.state.count]}}]),i}(s.Component),h=function(e){Object(c.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"render",value:function(){return Object(m.jsx)(o.a.Fragment,{children:Object(m.jsx)(k,{})})}}]),i}(s.Component);i(15);n.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"a":{"questions":[["Kogo Bezimienny spotyka jako pierwszego po wrzuceniu do Kolonii Karnej?"],["Co to za ci\u0119\u017cka i niepor\u0119czna bro\u0144 o kt\xf3rej wspomina na pocz\u0105tku rozgrywki Diego?"],["Jakie stworzenia Bezimienny spotyka jako pierwsze po rozpocz\u0119ciu swojej przygody?"],["Jakich umiej\u0119tno\u015bci uczy nas Drax poluj\u0105cy na drodze do Starego Obozu?"],["Kim jest Gravo?"],["Za ile bry\u0142ek rudy Thorus zgodzi si\u0119 wpu\u015bci\u0107 nas do zamku?"],["Czy na scen\u0119 obok bramy do zamku mo\u017cna dosta\u0107 si\u0119 po prostu na ni\u0105 wskakuj\u0105c?"],["Kupuj\u0105c surow\u0105 stal u kowala, wykuwaj\u0105c z niej niewyko\u0144czony miecz, a nastepnie go sprzedaj\u0105c ile zyskamy na tym rudy?"],["Kt\xf3rego z Baal\xf3w spotykasz jako pierwszego po wej\u015bciu na teren Obozu Bractwa \u015ani\u0105cego?"],["Kt\xf3rego z tych kopaczy mo\u017cesz zaprowadzi\u0107 ze Starego Obozu do Obozu Bractwa?"],["Kt\xf3rego z wymienionych atrybut\xf3w mo\u017cesz si\u0119 nauczy\u0107 tylko w Nowym Obozie?"],["Co otrzymuje Bezimienny po oddaniu sfa\u0142szowanej listy Diegowi?"],["Czy Diego zauwa\u017cy\u0142, \u017ce lista zosta\u0142a sfa\u0142szowana?"],["Sk\u0105d orkowie wzi\u0119li si\u0119 na Orkowym Cmentarzysku?"],["Z kim wyruszasz na Orkowe Cmentarzysko?"],["Przy kt\xf3rej pr\xf3bie zdobycia kamienia ogniskuj\u0105cego Bezimienny dzia\u0142a sam?"],["W kt\xf3rym rozdziale orkowie wychodz\u0105 poza swoje ziemie i poruszaj\u0105 si\u0119 pomi\u0119dzy obozami?"],["Co w j\u0119zyku ork\xf3w oznacza (w kolejno\u015bci) KROTAHK, KHAZ-TAK, DWACHKARR, ORTH-ANTAK?"],["Czym jest Ulu-Mulu?"],["Z jakimi golemami w kolejno\u015bci musi mierzy\u0107 si\u0119 Bezimienny?"],["Dlaczego Gomez kaza\u0142 wymordowa\u0107 Mag\xf3w Ognia?"],["Czy jest mo\u017cliwo\u015b\u0107 zdobycia runy Tchnienie \u015amierci?"],["Dlaczego orkowie schowali Uriziel w \u015awi\u0105tyni \u015ani\u0105cego?"],["Jakiego zakl\u0119cia u\u017cywa Cor Kalom na Bezimiennym?"],["W jaki spos\xf3b zaaatakuje nas \u015ani\u0105cy, gdy rzucimy si\u0119 na niego z mieczem?"]],"answers":[[["Gorna",false],["Bullita",true],["Diego",false],["Kopaczy",false],["Lestera",false]],[["Kilof",true],["Zardzewia\u0142y top\xf3r",false],["Stary miecz",false],["Drewniana pa\u0142ka",false],["Lester",false]],[["\u015acierwojady",false],["Kretoszczury",false],["Wilki",false],["Gobliny",false],["Chrz\u0105szcze",true]],[["Walki w zwarciu",false],["Walki dystansowej",false],["Umiej\u0119tno\u015bci z\u0142odziejskie",false],["Zbieranie zwierz\u0119cych trofe\xf3w",true],["Niczego nas nie uczy",false]],[["To jeden z kopaczy",true],["Stra\u017cnik w obozie",false],["Cie\u0144 mieszkaj\u0105cy pod murem",false],["Wojownik z Nowego Obozu",false],["Nie ma takiej osoby",false]],[["250",false],["500",false],["750",false],["1000",true],["1500",false]],[["Tak, nie ma z tym \u017cadnych problem\xf3w",false],["Nie, zostaniemy odepch\u0119ci przez niewidoczn\u0105 \u015bcian\u0119",true]],[["Nic nie zyskamy",false],["10",true],["20",false],["30",false],["50",false]],[["Baal Nanib",true],["Baal Lukor",false],["Baal Tondral",false],["Baal Orun",false],["Baal Cadar",false]],[["Dustin",true],["Gravo",false],["Herek",false],["Guy",false],["Graham",false]],[["Kradzie\u017c kieszonkowa",false],["Sk\xf3rowanie gad\xf3w",false],["Pozyskiwanie wydzieliny pe\u0142zaczy",false],["Akrobatyka",true],["Skradanie si\u0119",false]],[["Du\u017co jedzenia",false],["Lekki miecz stra\u017cnika",false],["1000 punkt\xf3w do\u015bwiadczenia",false],["Wszystkie z powy\u017cszych",true],["Nic nie dostaje",false]],[["Tak, jednak pu\u015bci\u0142 mu to p\u0142azem",false],["Tak, Bezimienny dostrzeg\u0142 w jego oczach dziwny b\u0142ysk",true],["Nie, Diego nic nie zauwa\u017cy\u0142",false],["Diego niczego nie zauwa\u017cy\u0142 teraz, ale p\xf3\u017aniej nam to wypomina",false]],[["Znale\u017ali si\u0119 tam przypadkiem",false],["Byli tam ca\u0142y czas",false],["\u015ani\u0105cy objawi\u0142 si\u0119 orkom i poleci\u0142 im si\u0119 tam uda\u0107",true],["Stra\u017c \u015awi\u0105tynna zaalarmowa\u0142a orkowych zwiadowc\xf3w",false]],[["Z Baal Lukorem",false],["Z Baal Cadarem",false],["Z Baal Orunem",false],["Z Cor Kalomem",false],["Sam",true]],[["W G\xf3rskiej Fortecy",false],["Nad morskim klifem",true],["W starym klasztorze",false],["W kanionie trolli",false],["W grobowcu",false]],[["W rozdziale 3",false],["W rozdziale 4",false],["W rozdziale 5",false],["W rozdziale 6",false],["Orkowie nie opuszczaj\u0105 swoich ziem",true]],[["Kie\u0142 trolla, j\u0119zyk ognistego jaszczura, pazury cieniostwora, z\u0105b b\u0142otnego w\u0119\u017ca",false],["J\u0119zyk ognistego jaszczura, r\xf3g cieniostwora, z\u0105b b\u0142otnego w\u0119\u017ca, kie\u0142 trolla",true],["J\u0119zyk ognistego jaszczura, kie\u0142 trolla, r\xf3g cieniostwora, serce demona",false],["R\xf3g cieniostwora, j\u0119zyk ognistego jaszczura, sk\xf3ra trolla, z\u0105b b\u0142otnego w\u0119\u017ca",false],["Z\u0105b b\u0142otnego w\u0119\u017ca, r\xf3g cieniostwora, sk\xf3ra ognistego jaszczura, kie\u0142 trolla",false]],[["Amulet",false],["Pier\u015bcie\u0144",false],["Bro\u0144",true],["Zbroja",false],["Trofeum",false]],[["Lodowy, Ognisty, Kamienny",false],["Ognisty, Kamienny, Lodowy",false],["Kamienny, Ognisty, Lodowy",false],["Kamienny, Lodowy, Ognisty",true],["Ognisty, Lodowy, Kamienny",false]],[["Sprzeciwili mu si\u0119",true],["Odkry\u0142 ich spisek z Nowym Obozem",false],["Zaplanowali zamach na Gomeza",false],["Nawo\u0142ywali do buntu",false],["Obarczy\u0142 ich win\u0105 za zawalenie si\u0119 Starej Kopalni",false]],[["Tak, mo\u017cna j\u0105 zakupi\u0107 u Xardasa",false],["Tak, mo\u017cna j\u0105 zakupi\u0107 u Mag\xf3w Wody",false],["Tak, posiada j\u0105 ostatni orkowy szaman",true],["Nie, ale mo\u017cna j\u0105 przywo\u0142a\u0107 komend\u0105",false],["Nie mo\u017cna zdoby\u0107 takiej runy w grze",false]],[["Ukryli go przed lud\u017ami",false],["Chcieli wykorzysta\u0107 jego moc",false],["To mia\u0142 by\u0107 dar dla wielkiego, orkowego genera\u0142a",false],["Ze strachu przed jego pot\u0119g\u0105",true],["Z rozkazu \u015ani\u0105cego",false]],[["Kula ognia",false],["Sen",false],["Piorun kulisty",false],["Bry\u0142a lodu",false],["Pirokineza",true]],[["Kul\u0105 ognia",false],["Przyzywa demony",false],["Usypia nas",true],["Odpycha nas magi\u0105",false],["Gryzie nas",false]]]},"b":{"questions":[["Dlaczego kr\u0105g ognia nie mo\u017ce dowiedzie\u0107 si\u0119 o Xardasie?"],["Jakie imi\u0119 widnieje na nagrobku w jaskini za Lesterem?"],["Kim by\u0142 w kolonii karnej bandyta pilnuj\u0105cy wej\u015bcia do jaskini Brago?"],["Kt\xf3ry z wymienionych sposob\xf3w NIE umo\u017cliwia dostania si\u0119 do miasta?"],["Kt\xf3ry z mistrz\xf3w niech\u0119tnie zgadza si\u0119, \u017ceby Bezimienny pracowa\u0142 u kogo\u015b innego?"],["Kto donosi na nas do Lorda Andre w zwi\u0105zku z listami go\u0144czymi?"],["Ile starych kamiennych tablic trzeba przekaza\u0107 Vatrasowi, by ten zwi\u0119kszy\u0142 nam man\u0119?"],["W jaki spos\xf3b Canthar m\u015bci si\u0119 na nas, gdy odm\xf3wimy mu wykonania zadania albo wtr\u0105cimy go do wi\u0119zienia?"],["Ile najwi\u0119cej z\u0142ota mo\u017cesz po\u017cyczy\u0107 od Lehmara?"],["Co jest ukryte w jaskini w p\xf3\u0142nocnym lesie, na zach\xf3d od kamiennego kr\u0119gu?"],["Kt\xf3r\u0105 \u015bwi\u0105tyni\u0119 w Jarkendarze opanowali nieumarli?"],["Kto ma decyduj\u0105cy g\u0142os w radzie pi\u0119ciu?"],["Kto skonstruowa\u0142 pu\u0142apk\u0119 z zapadniami do naje\u017conego kolcami do\u0142u?"],["Jaki jest charakterystyczny znak wej\u015bcia do G\xf3rniczej Doliny po raz pierwszy?"],["Kim s\u0105 poszukiwacze?"],["Kto zosta\u0142 zamordowany po powrocie Bezimiennego i kogo za to nies\u0142usznie pos\u0105dzono?"],["Jak Xardas nazywa Pyrokara kiedy ten nie zgadza si\u0119 na przybycie do S\u0142onecznego Kr\u0119gu?"],["Czy Xardas zgodzi si\u0119 pom\xf3c w naprawie Oka Innosa, je\u017celi Bezimienny nie awansowa\u0142 jeszcze do \u0142owc\xf3w smok\xf3w albo paladyn\xf3w?"],["Ilu orkowych herszt\xf3w Bezimienny musi wyelimonowa\u0107?"],["Ile zbeszczeszczonych kapliczek Bezimienny musi oczy\u015bci\u0107 ze z\u0142a?"],["Ile maksymalnie os\xf3b Bezimienny mo\u017ce zabra\u0107 na Dw\xf3r Irdorath?"],["Kogo Bezimienny spotyka w wi\u0119zieniu na wyspie?"],["Jak nazywa si\u0119 mroczny paladyn, jeden ze stra\u017cnik\xf3w smoka-o\u017cywie\u0144ca?"],["Co jest potrzebne do otwarcia ostatniej bramy prowadz\u0105cej do smoka-o\u017cywie\u0144ca?"],["Czy smok-o\u017cywieniec jest bezpo\u015brednio powi\u0105zany z Krukiem?"]],"answers":[[[["Xardas ich zdradzi\u0142",false],["Xardas obra\u0142 \u015bcie\u017ck\u0119 z\u0142a",true],["Pyrokar wygna\u0142 Xardasa z kr\u0119gu ognia",false],["Xardas ma wobec nich nikczemne plany",false],["Magowie ognia chc\u0105 jego \u015bmierci",false]],[["Lotar",true],["Hagen",false],["Andre",false],["Lothar",false],["Harad",false]],[["Najemnikiem",false],["Stra\u017cnikiem",false],["Nowicjuszem",false],["Nikim",false],["Kopaczem",true]],[["Pokonanie bandyt\xf3w",true],["Zbieracz zi\xf3\u0142",false],["Ubranie farmera",false],["Wspinaczka na mury",false],["\u0141ap\xf3wka",false]],[["Constantino",false],["Harad",false],["Thorben",false],["Mateo",false],["Bosper",true]],[["Lothar",false],["Pablo",true],["Valentino",false],["Moe",false],["Bartok",false]],[["3",false],["5",false],["8",false],["10",true],["12",false]],[["Rozpowie wszystkim kupcom, \u017ce Bezimienny by\u0142 skaza\u0144cem",true],["Na\u015ble na nas zbir\xf3w, by nas pobili i okradli ze z\u0142ota",false],["Doniesie na nas do Lorda Andre i b\u0119dziemy musieli zap\u0142aci\u0107 spor\u0105 grzywn\u0119",false],["Nic nie zrobi, bo siedzi w wi\u0119zieniu",false]],[["50",false],["100",false],["200",true],["500",false],["1000",false]],[["Jaskinia goblin\xf3w",false],["Krypta wojownik\xf3w",false],["Jaskinia z cieniostworami",false],["Gorzelnia",true],["Zielarka Sagitta",false]],[["Stra\u017cnik\xf3w Umar\u0142ych",true],["Kap\u0142an\xf3w",false],["Uzdrowicieli",false],["Wojownik\xf3w",false],["Uczonych",false]],[["Kap\u0142ani",false],["Stra\u017cnicy Umar\u0142ych",false],["Kasta Wojownik\xf3w",false],["Uzdrowiciele",false],["Uczeni",true]],[["Quahodron",false],["Khardimon",true],["Kruk",false]],[["Martwy stra\u017cnik",false],["Godzina 0:00",true],["Przelatuj\u0105cy smok",false],["Dialog z Diego",false],["Nie ma \u017cadnego",false]],[["S\u0142ugami Beliara",false],["Dawnymi cz\u0142onkami Bractwa \u015ani\u0105cego",false],["S\u0142ugami smoka-o\u017cywie\u0144ca",false],["Wszystkie odpowiedzi s\u0105 prawid\u0142owe",true]],[["Zamordowano Lothara, obwiniono Benneta",true],["Zamordowano Lothara, obwiniono Harada",false],["Zamordowano s\u0119dziego, obwiniono Benneta",false],["Zamordowano s\u0119dziego, obwiniono Harada",false],["Zamordowano maga ognia, obwiniono Benneta",false]],[["Sukinsynem",false],["Starym capem",true],["Starym szakalem",false],["Kretynem",false],["Idiot\u0105",false]],[["Tak",false],["Nie",true]],[["16",false],["18",false],["20",false],["22",true],["24",false]],[["5",false],["7",true],["9",false],["11",false],["Wszystkie",false]],[["5",false],["7",false],["9",false],["10",true],["Bez limitu",false]],[["Nowicjusza Pedro",true],["Orkowego przyw\xf3dc\u0119",false],["Zombi",false],["Upad\u0142ego paladyna",false],["Demona",false]],[["Lothar",false],["Galdan",false],["Alhor",true],["Elmer",false],["Nie ma imienia",false]],[["Zw\xf3j i Oko Innosa",false],["Zw\xf3j i Oko Mocy",true],["Tylko zw\xf3j",false],["Tylko Oko Mocy",false],["Tylko Oko Innosa",false]],[["Tak, smok chce zemsty za zamordowanie swojego s\u0142ugi",true],["Tak, Kruk by\u0142 jego stra\u017cnikiem",false],["Tak, to dla niego Kruk mia\u0142 zdoby\u0107 Szpon Beliara",false],["Tak, smok by\u0142 jego s\u0142ug\u0105",false],["Nie",false]]]]},"c":{"questions":[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]],"answers":[[[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]],[["",false],["",false],["",false],["",false],["",false]]]]}}')}},[[16,1,2]]]);
//# sourceMappingURL=main.af18e1ba.chunk.js.map