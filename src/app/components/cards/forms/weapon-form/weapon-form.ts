export interface WeaponType {
  type: string;
  pic: string;
}

export const WEAPON_TYPES: WeaponType[] = [
  {
    type: 'melee',
    pic: '/assets/pics/weptypeM.png',
  },
  {
    type: 'ranged',
    pic: '/assets/pics/weptypeM.png',
  },
  {
    type: 'desc',
    pic: '',
  },
];
