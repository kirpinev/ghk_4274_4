import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import rdr2 from "./assets/rdr2.png";
import forza from "./assets/forza.png";
import battlefield1 from "./assets/battlefield1.png";
import helldivers from "./assets/helldivers.png";
import witcher from "./assets/witcher.png";
import spiderman2 from "./assets/spiderman2.png";
import battlefield from "./assets/battlefield.png";
import battlefield4 from "./assets/battlefield4.png";
import dyinglight2 from "./assets/dyinglight2.png";
import civ7 from "./assets/civ7.png";
import gta4 from "./assets/gta4.png";
import doometernal from "./assets/doometernal.png";
import battlefield5 from "./assets/battlefield5.png";
import titanfall2 from "./assets/titanfall2.png";
import starwarsjedi from "./assets/starwarsjedi.png";
import metroexodus from "./assets/metroexodus.png";
import diablo4 from "./assets/diablo4.png";
import pathofexile2 from "./assets/pathofexile2.png";
import nfs from "./assets/nfs.png";
import warhammersm from "./assets/warhammersm.png";
import baldursgate from "./assets/baldursgate.png";
import dmc5 from "./assets/dmc5.png";
import tombrider from "./assets/tombrider.png";
import doom from "./assets/doom.png";
import rust from "./assets/rust.png";
import seaofthieves from "./assets/seaofthieves.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { AScoresCircleMIcon } from "@alfalab/icons-glyph/AScoresCircleMIcon";
import { CardMIcon } from "@alfalab/icons-glyph/CardMIcon";
import { MailMIcon } from "@alfalab/icons-glyph/MailMIcon";
import { sendDataToGA } from "./utils/events.ts";

interface Game {
  title: string;
  text: string;
  image: string;
  discount: string;
  price?: string;
  date?: string;
  objectFit?: "cover" | "contain";
  background?: string;
  objectPosition?: string;
  objectFitSheet?: "cover" | "contain";
  borderSheet?: boolean;
}

let games: Array<Game> = [
  {
    title: "Red Dead Redemption 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 5442 р.",
    image: rdr2,
    objectFit: "cover",
    objectFitSheet: "cover",
  },
  {
    title: "Forza Horizon 5",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2702 р.",
    image: forza,
    objectFit: "cover",
    objectFitSheet: "contain",
    borderSheet: true,
  },
  {
    title: "Battlefield 1",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2702 р.",
    image: battlefield1,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Helldivers 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2697 р.",
    image: helldivers,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Ведьмак 3: Дикая охота",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2702 р.",
    image: witcher,
    objectFit: "cover",
  },
  {
    title: "Marvel Человек Паук 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 3829 р.",
    image: spiderman2,
    objectFit: "cover",
  },
  {
    title: "Battlefield 2042",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 3379 р.",
    image: battlefield,
    objectFit: "cover",
  },
  {
    title: "Battlefield 4",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2699 р.",
    image: battlefield4,
    objectFit: "contain",
    background: "black",
  },
  {
    title: "Dying Light 2 Stay Human: Reloaded Edition",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2702 р.",
    image: dyinglight2,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Sid Meier's Civilization VII",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 4536 р.",
    image: civ7,
    objectFit: "cover",
  },
  {
    title: "Grand Theft Auto IV: The Complete Edition",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 968 р.",
    image: gta4,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
  },
  {
    title: "DOOM External",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 675 р.",
    image: doometernal,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
  },
  {
    title: "Battlefield™ V Definitive Edition",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2927 р.",
    image: battlefield5,
    objectFit: "cover",
    objectPosition: "-25px",
  },
  {
    title: "Titanfall 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1801 р.",
    image: titanfall2,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Star Wars Jedi: Survivor",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 3829 р.",
    image: starwarsjedi,
    objectFit: "cover",
    objectPosition: "-26px",
  },
  {
    title: "Metro Exodus",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1801 р.",
    image: metroexodus,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Diablo IV",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 3788 р.",
    image: diablo4,
    objectFit: "cover",
  },
  {
    title: "Path of Exile 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1334 р.",
    image: pathofexile2,
    objectFit: "cover",
  },
  {
    title: "Need for speed",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1801 р.",
    image: nfs,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
  },
  {
    title: "Wathammer 40,000: Space Marine 2",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2927 р.",
    image: warhammersm,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "Baldur's Gate 3",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2027 р.",
    image: baldursgate,
    objectFit: "cover",
  },
  {
    title: "Devil May Cry 5",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1689 р.",
    image: dmc5,
    objectFit: "cover",
  },
  {
    title: "Rise of the Tomb Raider",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 566 р.",
    image: tombrider,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
    background: "white",
  },
  {
    title: "DOOM",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1216 р.",
    image: doom,
    objectFit: "contain",
    objectFitSheet: "contain",
    borderSheet: true,
  },
  {
    title: "Rust",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 1425 р.",
    image: rust,
    objectFit: "contain",
    background: "black",
  },
  {
    title: "Sea of the Thieves: 2024 Edition",
    text: "За оплату картой онлайн",
    discount: "до 10%",
    price: "от 2321 р.",
    image: seaofthieves,
    objectFit: "cover",
  },
];

function shuffleArray(array: Array<Game>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

games = shuffleArray(games);

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [expanded, setExpanded] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game>();

  const submit = () => {
    setLoading(true);

    sendDataToGA({game: selectedGame?.title as string}).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        {games.map((game, index) => (
          <div
            className={appSt.card}
            key={index}
            onClick={() => {
              setSelectedGame(game);
              setExpanded(true);
            }}
          >
            <div
              className={appSt.cardImageContainer}
              style={{
                ...(game.background && {
                  backgroundColor: game.background,
                  borderRadius: "8px",
                }),
              }}
            >
              <img
                className={appSt.cardImage}
                src={game.image}
                alt={game.title}
                width={40}
                height={40}
                style={{
                  objectFit: game.objectFit,
                  ...(game.objectPosition && {
                    objectPosition: game.objectPosition,
                  }),
                  ...(game.borderSheet && {
                    border: "1px solid #F8F8F8",
                  }),
                }}
              />
            </div>
            <div className={appSt.cardTextContainer}>
              <Typography.Text view="primary-small" color="primary">
                {game.title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {game.text}
              </Typography.Text>

              <Gap size={2} />

              <Typography.Text view="primary-small" color="secondary">
                {game.price}
              </Typography.Text>
            </div>
            <div className={appSt.cardDiscountContainer}>
              <Typography.Text view="primary-small" color="primary">
                {game.discount}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>

      <BottomSheet
        open={expanded}
        onClose={() => setExpanded(false)}
        title="Кэшбэк до 10%"
        actionButton={
          <ButtonMobile block view="primary" loading={loading} onClick={submit}>
            Купить ключ
          </ButtonMobile>
        }
      >
        <Typography.Text
          view="primary-medium"
          color="primary"
          style={{ marginTop: "-6px" }}
        >
          За оплату игры на сайте Kupikod
        </Typography.Text>

        <Gap size={24} />

        <div className={appSt.sheetContainer}>
          <img
            className={appSt.sheetImage}
            src={selectedGame?.image}
            alt={selectedGame?.text}
            style={{
              ...(selectedGame?.borderSheet && {
                border: "1px solid #F5F5F5",
              }),
              ...(selectedGame?.objectFitSheet && {
                objectFit: selectedGame.objectFitSheet,
              }),
            }}
          />
        </div>
        <div className={appSt.sheetTextContainer}>
          <div className={appSt.card}>
            <div
              className={appSt.cardImageContainer}
              style={{
                ...(selectedGame?.background && {
                  backgroundColor: selectedGame?.background,
                  borderRadius: "8px",
                }),
              }}
            >
              <img
                className={appSt.cardImage}
                src={selectedGame?.image}
                alt={selectedGame?.title}
                width={40}
                height={40}
                style={{
                  objectFit: selectedGame?.objectFit,
                  ...(selectedGame?.objectPosition && {
                    objectPosition: selectedGame?.objectPosition,
                  }),
                }}
              />
            </div>
            <div className={appSt.cardTextContainer}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                {selectedGame?.title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Игра на ПК
              </Typography.Text>
            </div>
          </div>
        </div>

        <Gap size={24} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  background: "#F8F8F8",
                  borderRadius: "100%",
                  border: "2px solid #DCDCDC",
                }}
              >
                <CardMIcon color="gray" width={28} height={28} />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "2px",
                  backgroundColor: "#DCDCDC",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
                marginTop: "2px",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                defaultMargins={false}
              >
                Оплатите ключ для игры
              </Typography.Text>
              <Typography.Text view="primary-small" tag="p" color="secondary">
                Любой картой Альфа-Банка
              </Typography.Text>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  background: "#F8F8F8",
                  borderRadius: "100%",
                  border: "2px solid #DCDCDC",
                }}
              >
                <MailMIcon color="gray" width={28} height={28} />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "2px",
                  backgroundColor: "#DCDCDC",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
                marginTop: "2px",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                defaultMargins={false}
              >
                Получите ключ на почту
              </Typography.Text>
              <Typography.Text view="primary-small" tag="p" color="secondary">
                Он придёт в течение 5 минут
              </Typography.Text>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  background: "#F8F8F8",
                  borderRadius: "100%",
                  border: "2px solid #DCDCDC",
                }}
              >
                <AScoresCircleMIcon color="gray" width={28} height={28} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
                marginTop: "2px",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                defaultMargins={false}
              >
                Ждите кэшбек
              </Typography.Text>
              <Typography.Text view="primary-small" tag="p" color="secondary">
                Он придёт 10 числа следующего месяца
              </Typography.Text>
            </div>
          </div>

          <Gap size={24} />

          <Typography.Text view="primary-medium">
            Максимальный кэшбэк за весь период акции — 3000 ₽
          </Typography.Text>

          <Gap size={32} />
        </div>
      </BottomSheet>
    </>
  );
};
