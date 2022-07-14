export default {
  currentStep: 1,
  stepLists: [
    // step 1
    [
      {
        stepId: 1,
        iconStep: require("@/assets/house.svg"),
        subStep: [
          {
            idSubNav: 1,
            iconSubNav: require("../assets/config.svg"),
            subNavHeading: "システム設定",
            subNavTitle: "PEOPLE設定一覧",
            content: [
              {
                titleContent: "管理者機能",
                nameContent:'submenu1',
                toggleMenu:false,
                listContent: [
                  {
                    icon: require("../assets/company.svg"),
                    name: "管理者・会社情報設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/settionIcon.svg"),
                    name: "システム基本設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/peopleIcon.svg"),
                    name: "管理者",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/person1Icon.svg"),
                    name: "アカウント",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/groupIcon.svg"),
                    name: "グループ設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/laptopIcon.svg"),
                    name: "承認ルート設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/authorIcon.svg"),
                    name: "権限設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/locationIcon.svg"),
                    name: "ポジションコード設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/laptopIcon.svg"),
                    name: "パスワード・二段階認",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/seviceIcon.svg"),
                    name: "外部サービス連携",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/databaseIcon.svg"),
                    name: "データクレンジング",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/noficationIcon1.svg"),
                    name: "通知設定",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/exportIcon.svg"),
                    name: "インポート・エクスポート",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                ],
              },
              {
                titleContent: "マスタ・ラベル管理",
                nameContent:'submenu2',
                toggleMenu:false,
                listContent: [
                  {
                    icon: require("../assets/nofiIcon2.svg"),
                    name: "発令マスタ",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/employeeIcon.svg"),
                    name: "社員情報マスタ",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                  {
                    icon: require("../assets/titleIcon.svg"),
                    name: "社員情報マスタ",
                    heading:
                      "最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    // step 2
    [
      {
        stepId: 2,
        iconStep: require("../assets/newpaper.svg"),
      },
    ],
    [
      {
        stepId: 3,
        iconStep: require("../assets/userIcon.svg"),
      },
    ],
    [
      {
        stepId: 4,
        iconStep: require("../assets/searchUser.svg"),
      },
    ],
    [
      {
        stepId: 5,
        iconStep: require("../assets/megaphone.svg"),
      },
    ],
    [
      {
        stepId: 6,
        iconStep: require("../assets/profileIcon.svg"),
      },
    ],
    [
      {
        stepId: 7,
        iconStep: require("../assets/fagIcon.svg"),
      },
    ],
    [
      {
        stepId: 8,
        iconStep: require("../assets/notePensiIcon.svg"),
      },
    ],
  ],
};
