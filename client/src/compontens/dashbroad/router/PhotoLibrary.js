import { PATH_PHOTOLIBRARY } from "./contact";
import PhotoLibrary from '../page/PhotoLibrary';
export const router_photoLibrary = [
  {
    path: `${PATH_PHOTOLIBRARY}`,
    exact: true,
    mani: () => <PhotoLibrary />,
  },
];
