import { ArcTypeIds } from "../../src/enums/arc-types";
import { ArcIds } from "../../src/enums/arcs";
import { RankIds } from "../../src/enums/ranks";
import { Stats } from "../../src/enums/stats";
import type { Arc } from "../../src/types/arcs";

const image = (value: string) => `images/arcs/${value}`;

export default {
  [ArcIds.ATimeWillCome]: {
    id: ArcIds.ATimeWillCome,
    name: "Время придет",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 475,
    substat: Stats.CRIT_RATE,
    substat80: "20.00%",
    effect: {
      title: "Вознесение прилива",
      text: "Дает владельцу 10.00% к АТК, 10.00% к защита и 10.00% к ОЗ, когда в команде есть как минимум 3 разных "
        + "типа эспера.",
    },
    image: image("a-time-will-come.png"),
  },
  [ArcIds.BeHappy]: {
    id: ArcIds.BeHappy,
    name: "Будь счастлив",
    rankId: RankIds.B,
    typeId: ArcTypeIds.Gas,
    baseATK80: 316,
    substat: Stats.HP,
    substat80: "30.00%",
    effect: {
      title: "Лиана-обнимашка",
      text: "При победе над врагом увеличивает ОЗ владельца на 12.00%. Срабатывает не чаще раза в 20 сек.",
    },
    image: image("be-happy.png"),
  },
  [ArcIds.BlowUpTheCrowd]: {
    id: ArcIds.BlowUpTheCrowd,
    name: "Взорвать толпу",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Король битов",
      text: "Увеличивает атаку активного персонажа на 10.00%, когда владелец не на поле боя, и увеличивает атаку "
        + "активного персонажа на 2.00%, когда владелец наносит урон. Складывается до 4 раз и запускается не чаще "
        + "одного раза в 2 сек. Эффект сбрасывается, когда владелец становится активным персонажем.\nУвеличивает Урон "
        + "психики на 12.00%, когда владелец является активным персонажем, и увеличивает Урон психики на 2.00%, когда "
        + "наносит Урон психики базовой атакой. Складывается до 10 раз и запускается не чаще одного раза в 0,3 сек. "
        + "Эффект сбрасывается при смене персонажа.",
    },
    image: image("blow-up-the-crowd.png"),
  },
  [ArcIds.CallOfTheTwistedCity]: {
    id: ArcIds.CallOfTheTwistedCity,
    name: "Зов искаженного города",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 395,
    substat: Stats.HP,
    substat80: "37.50%",
    effect: {
      title: "Картонный замок",
      text: "Увеличивает бонус к лечению на 12.00% на 10 сек., когда владелец применяет навык перенаправления. Эффект "
        + "не складывается.",
    },
    image: image("call-of-the-twisted-city.png"),
  },
  [ArcIds.CamelliaSociety]: {
    id: ArcIds.CamelliaSociety,
    name: "Сообщество Камелии",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 666,
    substat: Stats.CRIT_RATE,
    substat80: "12.00%",
    effect: {
      title: "Тихий сад",
      text: "Увеличивает крит. урон на 12.00% на 5 сек., когда ОЗ владельца снижаются без получения урона. "
        + "Складывается до 4 раз. Открывает дугу: Тихий сад.\nРасходует 5.00% от текущих ОЗ и случайным образом "
        + "проводит одну из следующих атак дуги: Тихий сад (перезарядка 25 сек.)\nСуровый упрёк: беспощадные упрёки "
        + "сыплются дождем, как листья в бурю, нанося 5 экземпляров урона от чар в размере 24.00% от атаки.\n"
        + "Непрерывное нытьё: острые, колючие слова пронзают, как шипы, нанося 6 экземпляров урона от чар в размере "
        + "18.00% от атаки. Последний экземпляр наносит вдвое больше урона.",
    },
    image: image("camellia-society.png"),
  },
  [ArcIds.ClearSkies]: {
    id: ArcIds.ClearSkies,
    name: "Чистое небо",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 475,
    substat: Stats.ATK,
    substat80: "25.00%",
    effect: {
      title: "Бумажная эскадрилья",
      text: "Увеличивает урон анимы, наносимый навыком перенаправления и сверхспособность владельца на 20.00%",
    },
    image: image("clear-skies.png"),
  },
  [ArcIds.ContemplativeCat]: {
    id: ArcIds.ContemplativeCat,
    name: "Созерцательная кошка",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Gas,
    baseATK80: 512,
    substat: Stats.CRIT_DMG,
    substat80: "44.00%",
    effect: {
      title: "Маммон",
      text: "Увеличивает урон космоса на 2.50% за каждые 100 000 фонсов у владельца. Складывается до 10 раз.",
    },
    image: image("contemplative-cat.png"),
  },
  [ArcIds.CosmosDazeWildReverie]: {
    id: ArcIds.CosmosDazeWildReverie,
    name: "Космический восторг, дикая греза",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Gas,
    baseATK80: 475,
    substat: Stats.ATK,
    substat80: "25.00%",
    effect: {
      title: "Бопп",
      text: "Повышает наносимый носителем урон на 18.00% на 10 сек. после использования навыка поддержки. Срабатывает "
        + "не чаще раза в 20 сек.",
    },
    image: image("cosmos-daze-wild-reverie.png"),
  },
  [ArcIds.DangerousGame]: {
    id: ArcIds.DangerousGame,
    name: "Опасная игра",
    rankId: RankIds.B,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 380,
    substat: Stats.BREAK_INTENSITY,
    substat80: 96,
    effect: {
      title: "Деструктор",
      text: "При снижении разрушения повышает интенсивность разрушения владельца на 60 на 10 сек. Запускается не чаще "
        + "одного раза в 20 сек.",
    },
    image: image("dangerous-game.png"),
  },
  [ArcIds.DayOff]: {
    id: ArcIds.DayOff,
    name: "Выходной",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.CHARGE_EFFICIENCY,
    substat80: "33.00%",
    effect: {
      title: "Затмение",
      text: "Увеличивает атаку владельца на 30.00%. Открывает дугу: Затмение.\nДуга: Затмение - владелец создает "
        + "затмение на 40 сек. Каждый убитый во время затмения враг восстанавливает 6 ед. энергии сверхспособности, до "
        + "5 раз. (Перезарядка: 300 сек.)",
    },
    image: image("day-off.png"),
  },
  [ArcIds.DrawnBlade]: {
    id: ArcIds.DrawnBlade,
    name: "Обнаженный клинок",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 395,
    substat: Stats.ATK,
    substat80: "37.50%",
    effect: {
      title: "Алый Хексблейд",
      text: "Наносит дополнительный урон от чар в размере 200.00% от атаки, когда владелец запускает ответный удар.",
    },
    image: image("drawn-blade.png"),
  },
  [ArcIds.EternalWaltz]: {
    id: ArcIds.EternalWaltz,
    name: "Вечный вальс",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 424,
    substat: Stats.HP,
    substat80: "41.25%",
    effect: {
      title: "Арахна",
      text: "Увеличивает макс. ОЗ на 20.00%.\nУвеличивает наносимый ментальный урон на 10.00% на 10 сек. после того, "
        + "как владелец применяет сверхспособность.",
    },
    image: image("eternal-waltz.png"),
  },
  [ArcIds.FailingYouHeavyInMyHeart]: {
    id: ArcIds.FailingYouHeavyInMyHeart,
    name: "Я подвожу тебя с тяжестью в сердце",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Gas,
    baseATK80: 475,
    substat: Stats.BREAK_INTENSITY,
    substat80: 120,
    effect: {
      title: "Коллекционер знаний паука",
      text: "При нанесении урона базовыми атаками дает владельцу 1 уровень знания паука, вплоть до 8 уровней (макс. 1 "
        + "уровень каждые 0,5 сек.) При использовании сверхспособности все уровни расходуются. Увеличивает атаку всей "
        + "команды на 1.00% на 10 сек. за каждый израсходованный уровень. Дополнительно увеличивает атаку ещё на "
        + "2.00%, когда израсходовано 8 уровней.",
    },
    image: image("failing-you-heavy-in-my-heart.png"),
  },
  [ArcIds.FirstStepToSuccess]: {
    id: ArcIds.FirstStepToSuccess,
    name: "Первый шаг к успеху",
    rankId: RankIds.B,
    typeId: ArcTypeIds.Solid,
    baseATK80: 380,
    substat: Stats.ATK,
    substat80: "20.00%",
    effect: {
      title: "Норос",
      text: "При применении навыка перенаправления увеличивает атаку владельца на 12.00% на 10 сек. Запускается не "
        + "чаще раза в 20 сек.",
    },
    image: image("first-step-to-success.png"),
  },
  [ArcIds.FluffOfFearlessness]: {
    id: ArcIds.FluffOfFearlessness,
    name: "Пух бесстрашия",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.CRIT_RATE,
    substat80: "22.00%",
    effect: {
      title: "Конфета-хлопушка",
      text: "Когда владелец применяет сверхспособность, увеличивает атаку на 25.00% на 10 сек. Эффект не складывается.",
    },
    image: image("fluff-of-fearlessness.png"),
  },
  [ArcIds.FluffOfFerocity]: {
    id: ArcIds.FluffOfFerocity,
    name: "Пух ярости",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Конфета рыцаря",
      text: "Увеличивает крит. урон владельца на 4.00% на 10 сек. после нанесения крит. удара. Складывается до 10 раз. "
        + "При повторном запуске длительность сбрасывается.",
    },
    image: image("fluff-of-ferocity.png"),
  },
  [ArcIds.FluffOfFinesse]: {
    id: ArcIds.FluffOfFinesse,
    name: "Пух изящества",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Gas,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Конфета вора",
      text: "После выполнения критического уклонения увеличивает урон владельца на 8.00% на 10 сек. Складывается до 3 "
        + "раз. При повторном запуске длительность сбрасывается.",
    },
    image: image("fluff-of-finesse.png"),
  },
  [ArcIds.FluffOfFleetness]: {
    id: ArcIds.FluffOfFleetness,
    name: "Пух проворности",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 512,
    substat: Stats.CRIT_DMG,
    substat80: "44.00%",
    effect: {
      title: "Моторная конфета",
      text: "Увеличивает атаку на 5.00% за 1 сек., когда владелец является активным персонажем. Складывается до 5 раз. "
        + "Сбрасывается, когда владелец покидает поле боя.",
    },
    image: image("fluff-of-fleetness.png"),
  },
  [ArcIds.FluffOfFortitude]: {
    id: ArcIds.FluffOfFortitude,
    name: "Пух стойкости",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Конфета мордоворота",
      text: "Увеличивает урон владельца на 22.00%. Эффект увеличивается до 28.00% против врагов, у которых меньше 50 % "
        + "ОЗ.",
    },
    image: image("fluff-of-fortitude.png"),
  },
  [ArcIds.GoodBoysGrandAdventure]: {
    id: ArcIds.GoodBoysGrandAdventure,
    name: "Большой квест хорошего мальчика",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Gas,
    baseATK80: 474,
    substat: Stats.ATK,
    substat80: "45.00%",
    effect: {
      title: "Морфикс",
      text: "Увеличивает скорость зарядки на 18.00%.\nУвеличивает атаку команды на 10.00% на 20 сек., когда владелец "
        + "применяет сверхспособность. Увеличивает атаку команды ещё на 6.00%, если враги находятся под контролем "
        + "эффекта сверхспособности. Эффекты с одинаковым названием не складываются.",
    },
    image: image("good-boys-grand-adventure.png"),
  },
  [ArcIds.HethereausKeeper]: {
    id: ArcIds.HethereausKeeper,
    name: "Хранитель Этеро",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Палач справедливости",
      text: "Увеличивает атаку на 15.00%.\nУвеличивает урон, наносимый боссам, на 15.00%.\nОткрывает дугу: Офицер "
        + "Усатик.\nДуга: Офицер Усатик - призывает офицера Усатика для помощи в бою.\nОфицер Усатик непрерывно "
        + "атакует врагов, нанося урон в размере 100.00% от АТК владельца каждым ударом.\nОстается на 30 сек. Время "
        + "восстановления: 60 сек.",
    },
    image: image("hethereaus-keeper.png"),
  },
  [ArcIds.MarchingBeyondTime]: {
    id: ArcIds.MarchingBeyondTime,
    name: "За пределы времени",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 570,
    substat: Stats.CRIT_RATE,
    substat80: "24.00%",
    effect: {
      title: "Время за пределами времени",
      text: "Увеличивает АТК на 16.00%.\nПри активации навыка перенаправления носитель входит в Лабораторию пустоши и "
        + "сбрасывает текущее время пустоши. В Лаборатории союзники получают 1 уровень Времени пустоши за каждое "
        + "использование навыка перенаправления или поддержки (макс. 3 уровня). Когда носитель применяет "
        + "сверхспособность в Лаборатории пустоши, он выходит из неё и тратит всё Время пустоши: крит. урон "
        + "сверхспособности повышается на 24.00% + дополнительно 8.00% за каждый уровень. Расход 3 уровней за раз даёт "
        + "12.00% игнорирования защиты на 70 сек.",
    },
    image: image("marching-beyond-time.png"),
  },
  [ArcIds.MindRoyale]: {
    id: ArcIds.MindRoyale,
    name: "Королевский разум",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 555,
    substat: Stats.BREAK_INTENSITY,
    substat80: 60,
    effect: {
      title: "Разрушитель вдохновения",
      text: "При применении навыка перенаправления дает владельцу 10 ед. энергии сверхспособности. Запускается не чаще "
        + "раза в 20 сек.",
    },
    image: image("mind-royale.png"),
  },
  [ArcIds.Oraora]: {
    id: ArcIds.Oraora,
    name: "Ора-ора!",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 395,
    substat: Stats.ATK,
    substat80: "37.50%",
    effect: {
      title: "Панчер Ора",
      text: "За каждую проведенную базовую атаку увеличивает урон от базовых атак владельца на 2.00% на 10 сек., "
        + "складывается до 10 раз. У каждого уровня своя длительность.",
    },
    image: image("oraora.png"),
  },
  [ArcIds.RagingFlames]: {
    id: ArcIds.RagingFlames,
    name: "Бушующее пламя",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 666,
    substat: Stats.CRIT_DMG,
    substat80: "24.00%",
    effect: {
      title: "Всадник без головы",
      text: "Увеличивает урон лакшаны на 15.00%.\nУвеличивает урон от навыка перенаправления и сверхспособности "
        + "владельца на 10.00% на 10 сек. после применения сверхспособности. Пока эффект действует, увеличивает урон "
        + "от навыка перенаправления владельца на 5.00% за применение, складываясь до 2 раз.",
    },
    image: image("raging-flames.png"),
  },
  [ArcIds.ReadyReady]: {
    id: ArcIds.ReadyReady,
    name: "Полная готовность",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 570,
    substat: Stats.CRIT_RATE,
    substat80: "24.00%",
    effect: {
      title: "Талисман командира-тигра",
      text: "Увеличивает атаку на 15.00%.\nКогда вы применяете навык перенаправления или сверхспособность, увеличивает "
        + "урон от базовых атак и критического контрудара на 15.00% на 15 сек.\nСкладывается до 2 раз.\nВладелец "
        + "получает левый талисман тигра, когда применяет навык перенаправления, правый талисман тигра, когда "
        + "применяет сверхспособность.\nЕсли владелец получит талисман одного типа в течение 15 сек. после получения "
        + "второго, открывается Талисман командира-тигра.\nДуга: Талисман командира-тигра - увеличивает урон владельца "
        + "против боссов на 10.00% на 10 сек.",
    },
    image: image("ready-ready.png"),
  },
  [ArcIds.RealMusic]: {
    id: ArcIds.RealMusic,
    name: "«Настоящая музыка»",
    rankId: RankIds.B,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 380,
    substat: Stats.ATK,
    substat80: "20.00%",
    effect: { title: "Запись с привидениями", text: "Дает владельцу бонус 12.00% к навыку перенаправления урона." },
    image: image("real-music.png"),
  },
  [ArcIds.RealityRefuge]: {
    id: ArcIds.RealityRefuge,
    name: "Убежище реальности",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 570,
    substat: Stats.ATK,
    substat80: "30.00%",
    effect: {
      title: "Парусник",
      text: "Увеличивает урон анимы на 15.00%.\nУвеличивает урон вложений владельца на 10.00%. Увеличивает бонус к "
        + "урону вложений до 20.00% на 6 сек., когда владелец применяет сверхспособность. Эффект не складывается.",
    },
    image: image("reality-refuge.png"),
  },
  [ArcIds.ShinyDays]: {
    id: ArcIds.ShinyDays,
    name: "Блестящие дни",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 475,
    substat: Stats.ATK,
    substat80: "25.00%",
    effect: {
      title: "Плёнка - МАНИШ",
      text: "Повышает интенсивность разрушения на 48.\nУвеличивает урон на 10.00% против сломленных врагов.",
    },
    image: image("shiny-days.png"),
  },
  [ArcIds.SongOfTheWhale]: {
    id: ArcIds.SongOfTheWhale,
    name: "Песня кита",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Глубокая тоска",
      text: "Увеличивает атаку на 12.00%.\nУвеличивает урон владельца по сломленным врагам на 12.00%.\nВосстанавливает "
        + "владельцу 30.00% ОЗ после победы над сломленным врагом. Запускается не чаще одного раза в 30 сек.",
    },
    image: image("song-of-the-whale.png"),
  },
  [ArcIds.StellarVeil]: {
    id: ArcIds.StellarVeil,
    name: "Звёздная вуаль",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Аква-астра",
      text: "Увеличивает Урон психики владельца на 12.00%. При нанесении урона психики увеличивает крит. урон на 2.00% "
        + "на 5 сек. Эффект складывается до 10 раз. Срабатывает не чаще одного раза в 0,1 сек.",
    },
    image: image("stellar-veil.png"),
  },
  [ArcIds.TearsBeneathTheMask]: {
    id: ArcIds.TearsBeneathTheMask,
    name: "Слезы за маской",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Gas,
    baseATK80: 512,
    substat: Stats.ATK,
    substat80: "27.50%",
    effect: {
      title: "Птица в гнезде",
      text: "Накладывает Предупреждающий взгляд на врагов, поражённых сверхспособностью владельца.\nПомеченные враги "
        + "наносят на 18 % меньше урона в течение 20 сек.\nЭффект не складывается.",
    },
    image: image("tears-beneath-the-mask.png"),
  },
  [ArcIds.TheFoolsSpring]: {
    id: ArcIds.TheFoolsSpring,
    name: "Ложная весна",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 395,
    substat: Stats.DEF,
    substat80: "52.50%",
    effect: { title: "Живая фаланга", text: "Увеличивает атаку на 18.00%, когда у владельца есть щит." },
    image: image("the-fools-spring.png"),
  },
  [ArcIds.TheForgotten]: {
    id: ArcIds.TheForgotten,
    name: "Забытое",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Solid,
    baseATK80: 475,
    substat: Stats.HP,
    substat80: "25.00%",
    effect: {
      title: "Рамка для картины",
      text: "Увеличивает атаку на 20.00%, когда у владельца больше 50 % ОЗ.\nУвеличивает защиту на 20.00%, когда у "
        + "владельца меньше 50 % ОЗ.",
    },
    image: image("the-forgotten.png"),
  },
  [ArcIds.TheGoodTheBadTheBitter]: {
    id: ArcIds.TheGoodTheBadTheBitter,
    name: "Хороший, плохой, горький",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 475,
    substat: Stats.HP,
    substat80: "25.00%",
    effect: {
      title: "Горький торт",
      text: "При получении урона увеличивает защита владельца на 26.00% на 10 сек. Срабатывает не чаще раза в 20 сек.",
    },
    image: image("the-good-the-bad-the-bitter.png"),
  },
  [ArcIds.TheGreatThief]: {
    id: ArcIds.TheGreatThief,
    name: "Великий вор",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 475,
    substat: Stats.BREAK_INTENSITY,
    substat80: 120,
    effect: {
      title: "Данзабуру",
      text: "Увеличивает интенсивность разрушения на 70 для всех персонажей с тем же типом эспера, что у владельца "
        + "(включая самого владельца), когда в команде 3 или больше таких персонажей. Этот эффект не складывается.",
    },
    // image: image(""),
  },
  [ArcIds.TheLastRose]: {
    id: ArcIds.TheLastRose,
    name: "Последняя роза",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 570,
    substat: Stats.CRIT_RATE,
    substat80: "24.00%",
    effect: {
      title: "Богемная роза",
      text: "Увеличивает атаку на 14.00%.\nДаёт 1 уровень Шипа хаоса каждый раз, когда владелец наносит периодический "
        + "урон. Увеличивает крит. урон на 6.00% за уровень на 3 сек. Запускается не чаще раза в 0,3 сек., "
        + "складывается до 10 раз, при повторном запуске длительность сбрасывается. Сразу даёт 10 уровней Шипа хаоса, "
        + "когда владелец применяет навык перенаправления.\nПродлевает состояние сломленного врага на 3 сек., когда "
        + "владелец наносит ему урон (срабатывает не чаще одного раза за эффект разрушения).",
    },
    // image: image(""),
  },
  [ArcIds.TheRainThatShookTheWorld]: {
    id: ArcIds.TheRainThatShookTheWorld,
    name: "Дождь, сотрясший мир",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.CRIT_RATE,
    substat80: "22.00%",
    effect: {
      title: "Гипервортекс",
      text: "Наносит повышенный на 30.00% урон космоса от навыка перенаправления и сверхспособности носителя.\n"
        + "Увеличивает эссентию носителя на 36 на 15 сек. после применения навыка перенаправления. При повторной "
        + "активации длительность сбрасывается.",
    },
    image: image("the-rain-that-shook-the-world.png"),
  },
  [ArcIds.TimeBandit]: {
    id: ArcIds.TimeBandit,
    name: "Бандит времени",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Solid,
    baseATK80: 475,
    substat: Stats.HP,
    substat80: "25.00%",
    effect: {
      title: "Отмычка",
      text: "Увеличивает интенсивность разрушения на 90 на 10 сек., когда владелец применяет навык перенаправления. "
        + "Эффект не складывается.\nОткрывает дугу: Отмычка.\nДуга: Отмычка - призывает Отмычку, открывающую все "
        + "запертые замки поблизости.",
    },
    // image: image(""),
  },
  [ArcIds.Umbrella]: {
    id: ArcIds.Umbrella,
    name: "Зонтик",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Synthesis,
    baseATK80: 395,
    substat: Stats.DEF,
    substat80: "52.50%",
    effect: {
      title: "Человек дождя",
      text: "Увеличивает ОЗ на 10.00%.\nУсиливает щиты на 10.00%, когда ОЗ владельца выше 50 %.",
    },
    image: image("umbrella.png"),
  },
  [ArcIds.Us]: {
    id: ArcIds.Us,
    name: "Мы.",
    rankId: RankIds.B,
    typeId: ArcTypeIds.Plasma,
    baseATK80: 380,
    substat: Stats.ATK,
    substat80: "20.00%",
    effect: { title: "Протоядро", text: "Увеличивает урон базовых атак владельца на 12.00%." },
    image: image("us.png"),
  },
  [ArcIds.WatchYourHeads]: {
    id: ArcIds.WatchYourHeads,
    name: "Берегите головы!",
    rankId: RankIds.A,
    typeId: ArcTypeIds.Gas,
    baseATK80: 475,
    substat: Stats.CRIT_DMG,
    substat80: "40.00%",
    effect: {
      title: "Призрачный змей",
      text: "Увеличивает атаку на 10.00% и урон лакшаны по целям, пораженным Реморой и Следом, на 10.00% на 15 сек., "
        + "когда владелец применяет навык перенаправления. Эффект не складывается.",
    },
    image: image("watch-your-heads.png"),
  },
  [ArcIds.YourHappinessIsPriceless]: {
    id: ArcIds.YourHappinessIsPriceless,
    name: "Твое счастье бесценно",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Solid,
    baseATK80: 512,
    substat: Stats.DEF,
    substat80: "38.50%",
    effect: {
      title: "Накупеда",
      text: "Увеличивает ОЗ на 24.00%.\nКогда владелец применяет сверхспособность, дает один из следующих эффектов "
        + "случайным образом:\n1. Член команды с самым низким процентом ОЗ восстанавливает 20.00% от макс. ОЗ.\n2. "
        + "Дает щит в размере 20.00% от макс. ОЗ владельца на 15 сек.\n3. Все члены команды восстанавливают 10.00% "
        + "ОЗ.\nСрабатывает не чаще одного раза в 30 сек.",
    },
    image: image("your-happiness-is-priceless.png"),
  },
  [ArcIds.YouthfulFantasy]: {
    id: ArcIds.YouthfulFantasy,
    name: "Ребяческая фантазия",
    rankId: RankIds.S,
    typeId: ArcTypeIds.Liquid,
    baseATK80: 570,
    substat: Stats.ATK,
    substat80: "30.00%",
    effect: {
      title: "Чёрный том",
      text: "Увеличивает интенсивность разрушения на 60.\nЗапирает дугу: Чёрный том по умолчанию на две цепи. Снимает "
        + "1 цепь каждый раз, когда любой персонаж в команде использует навык поддержки. Создаёт дугу: Чёрный том "
        + "становится доступен, когда все две цепи сняты.\nДуга: Чёрный том - призывает Чёрный том на 20 сек. Каждые 5 "
        + "сек. отмечает одного врага. Увеличивает наносимый отмеченным врагам урон хаоса на 20.00%. Когда отмеченные "
        + "враги получают урон от разрушения, наносит им урон хаоса в размере 200.00% от атаки владельца.",
    },
    image: image("youthful-fantasy.png"),
  },
} as Record<Arc["id"], Arc>;
