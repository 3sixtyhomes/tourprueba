TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158",
  "thumbnailUrl": "media/panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010103_20200523113437",
  "partial": false,
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_987D11CE_AB8A_1913_41DF_8EC1868E37DC.png",
   "paddingLeft": 0,
   "width": 42,
   "paddingRight": 0,
   "height": 42,
   "mode": "push",
   "maxHeight": 42,
   "transparencyActive": false,
   "paddingBottom": 0,
   "minWidth": 1,
   "maxWidth": 42,
   "shadow": false,
   "verticalAlign": "middle",
   "minHeight": 1,
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_987D11CE_AB8A_1913_41DF_8EC1868E37DC",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_987D11CE_AB8A_1913_41DF_8EC1868E37DC_rollover.png",
   "borderSize": 0,
   "data": {
    "name": "IconButton VR"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "iconURL": "skin/IconButton_F34A3A86_C479_A40A_41C8_9D4F5D644DEF.png",
   "paddingLeft": 0,
   "width": 46,
   "paddingRight": 0,
   "height": 46,
   "mode": "push",
   "maxHeight": 46,
   "transparencyActive": true,
   "paddingBottom": 0,
   "minWidth": 30,
   "maxWidth": 46,
   "shadow": false,
   "top": 20,
   "verticalAlign": "middle",
   "minHeight": 30,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_F34A3A86_C479_A40A_41C8_9D4F5D644DEF",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_F34A3A86_C479_A40A_41C8_9D4F5D644DEF_rollover.png",
   "click": "this.setComponentVisibility(this.Container_F34A2A86_C479_A40A_41A2_B1FF7D2C96C3, false, 0, null, null, false)",
   "borderSize": 0,
   "data": {
    "name": "X"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "right": 20,
   "paddingTop": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BFE5039_51E0_6940_41C6_922102043B51",
  "thumbnailUrl": "media/panorama_5BFE5039_51E0_6940_41C6_922102043B51_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BFE5039_51E0_6940_41C6_922102043B51_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BFE5039_51E0_6940_41C6_922102043B51_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BFE5039_51E0_6940_41C6_922102043B51.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010104_20200523113517",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BFE5039_51E0_6940_41C6_922102043B51_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54",
  "thumbnailUrl": "media/panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010105_20200523113545",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A",
  "thumbnailUrl": "media/panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010106_20200523113619",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BD94E37_51E0_D941_41C8_33597566AA07",
  "thumbnailUrl": "media/panorama_5BD94E37_51E0_D941_41C8_33597566AA07_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BD94E37_51E0_D941_41C8_33597566AA07_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BD94E37_51E0_D941_41C8_33597566AA07_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BD94E37_51E0_D941_41C8_33597566AA07.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010107_20200523113647",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD94E37_51E0_D941_41C8_33597566AA07_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A",
  "thumbnailUrl": "media/panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010108_20200523113721",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF",
  "thumbnailUrl": "media/panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010109_20200523113801",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA",
  "thumbnailUrl": "media/panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010110_20200523113831",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E",
  "thumbnailUrl": "media/panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010111_20200523113906",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA24425_51E7_A940_4192_63175EA117DE",
  "thumbnailUrl": "media/panorama_5BA24425_51E7_A940_4192_63175EA117DE_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA24425_51E7_A940_4192_63175EA117DE_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA24425_51E7_A940_4192_63175EA117DE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA24425_51E7_A940_4192_63175EA117DE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010112_20200523113943",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA24425_51E7_A940_4192_63175EA117DE_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65",
  "thumbnailUrl": "media/panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010113_20200523114013",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2",
  "thumbnailUrl": "media/panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010114_20200523114041",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA5121E_51E7_A940_41B8_89C42F699736",
  "thumbnailUrl": "media/panorama_5BA5121E_51E7_A940_41B8_89C42F699736_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA5121E_51E7_A940_41B8_89C42F699736_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA5121E_51E7_A940_41B8_89C42F699736_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA5121E_51E7_A940_41B8_89C42F699736.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010115_20200523114116",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA5121E_51E7_A940_41B8_89C42F699736_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735",
  "thumbnailUrl": "media/panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010116_20200523114157",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E",
  "thumbnailUrl": "media/panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010117_20200523114228",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB",
  "thumbnailUrl": "media/panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010118_20200523114311",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA2A332_51E0_AF40_41CE_C151877CD960",
  "thumbnailUrl": "media/panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA2A332_51E0_AF40_41CE_C151877CD960.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010119_20200523114400",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BA0F832_51E0_F943_41D3_F011C0982674",
  "thumbnailUrl": "media/panorama_5BA0F832_51E0_F943_41D3_F011C0982674_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BA0F832_51E0_F943_41D3_F011C0982674_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BA0F832_51E0_F943_41D3_F011C0982674_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BA0F832_51E0_F943_41D3_F011C0982674.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010120_20200523114528",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BA0F832_51E0_F943_41D3_F011C0982674_camera"
 },
 {
  "hfov": 360,
  "hfovMax": 130,
  "id": "panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C",
  "thumbnailUrl": "media/panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "R0010121_20200523114840",
  "partial": false,
  "vfov": 180
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_camera"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BFE5039_51E0_6940_41C6_922102043B51",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BFE5039_51E0_6940_41C6_922102043B51_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD94E37_51E0_D941_41C8_33597566AA07",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD94E37_51E0_D941_41C8_33597566AA07_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA24425_51E7_A940_4192_63175EA117DE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA24425_51E7_A940_4192_63175EA117DE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA5121E_51E7_A940_41B8_89C42F699736",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA5121E_51E7_A940_41B8_89C42F699736_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA2A332_51E0_AF40_41CE_C151877CD960",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA0F832_51E0_F943_41D3_F011C0982674",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA0F832_51E0_F943_41D3_F011C0982674_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B968AA0_51E1_D940_41CA_0D4FB2DA0158_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BFE5039_51E0_6940_41C6_922102043B51",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BFE5039_51E0_6940_41C6_922102043B51_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA7854C_51E0_6BC0_41BD_37DF48345A54_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA2FA33_51E0_B940_41A3_64BEFAD8051A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD94E37_51E0_D941_41C8_33597566AA07",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD94E37_51E0_D941_41C8_33597566AA07_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDEA22E_51E0_E940_41D1_C454F9E7A12A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA1D676_51E0_A9C0_417E_1C9284A15AEF_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA47AE3_51E0_5EC0_41D2_518C08E365DA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA4AF59_51E0_77C0_41C9_CA1228831A0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA24425_51E7_A940_4192_63175EA117DE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA24425_51E7_A940_4192_63175EA117DE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDA08C5_51E7_DAC0_41D3_810DBDB26B65_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD9AD58_51E7_FBC0_4186_0AAB580222E2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA5121E_51E7_A940_41B8_89C42F699736",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA5121E_51E7_A940_41B8_89C42F699736_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BD9E6C8_51E0_56C0_41B9_4AB48B056735_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDA3AD8_51E0_7ECF_41C4_3CD713433C2E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BDDBF0C_51E0_5747_41B8_B0425FDC3EBB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA2A332_51E0_AF40_41CE_C151877CD960",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA2A332_51E0_AF40_41CE_C151877CD960_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BA0F832_51E0_F943_41D3_F011C0982674",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BA0F832_51E0_F943_41D3_F011C0982674_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5BAC7C7F_51E0_D9C0_41C4_7788A8D3369C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist, 18, 0)"
   }
  ],
  "id": "ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist",
  "class": "PlayList"
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeight": 10,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "width": "100%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "bottom": "0%",
  "transitionMode": "blending",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "paddingLeft": 0,
  "width": 1920,
  "paddingRight": 0,
  "height": 250,
  "maxHeight": 250,
  "url": "skin/Image_38AE0033_3506_F021_416B_4DF12FECDFC8.png",
  "paddingBottom": 0,
  "minWidth": 0,
  "maxWidth": 1920,
  "scaleMode": "fit_inside",
  "shadow": false,
  "top": 0,
  "verticalAlign": "top",
  "minHeight": 0,
  "propagateClick": false,
  "horizontalAlign": "left",
  "id": "Image_38AE0033_3506_F021_416B_4DF12FECDFC8",
  "class": "Image",
  "data": {
   "name": "White strip"
  },
  "borderSize": 0,
  "borderRadius": 0,
  "left": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "children": [
   {
    "paddingLeft": 10,
    "width": 498,
    "paddingRight": 10,
    "height": 98,
    "paddingBottom": 10,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "top": "11.23%",
    "minHeight": 1,
    "visible": false,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "id": "HTMLText_3D347B78_3503_302E_41BA_D209C34F0BE6",
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "data": {
     "name": "Company name"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Arial Black', Gadget, sans-serif;\"><B>COMPANY</B></SPAN><SPAN STYLE=\"font-size:33px;\">LOGO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">www.company.com</SPAN></SPAN></DIV></div>",
    "borderRadius": 0,
    "left": "2.18%",
    "backgroundOpacity": 0,
    "paddingTop": 10
   },
   {
    "children": [
     {
      "iconBeforeLabel": true,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontSize": 15,
      "paddingLeft": 0,
      "width": 100,
      "gap": 5,
      "paddingRight": 0,
      "rollOverFontColor": "#333333",
      "height": 44,
      "mode": "push",
      "layout": "horizontal",
      "fontFamily": "Arial",
      "textDecoration": "none",
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "iconWidth": 32,
      "fontWeight": "bold",
      "minHeight": 1,
      "visible": false,
      "borderColor": "#000000",
      "shadow": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "Button_3D99702F_350D_5022_41C3_F32EBDE4AC3A",
      "class": "Button",
      "data": {
       "name": "Button 1"
      },
      "fontColor": "#666666",
      "iconHeight": 32,
      "shadowColor": "#000000",
      "borderSize": 0,
      "shadowSpread": 1,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "label": "BUTTON 1",
      "paddingTop": 0
     },
     {
      "iconBeforeLabel": true,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontSize": 15,
      "paddingLeft": 0,
      "width": 100,
      "gap": 5,
      "paddingRight": 0,
      "rollOverFontColor": "#333333",
      "height": 44,
      "mode": "push",
      "layout": "horizontal",
      "fontFamily": "Arial",
      "textDecoration": "none",
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "iconWidth": 32,
      "fontWeight": "bold",
      "minHeight": 1,
      "visible": false,
      "borderColor": "#000000",
      "shadow": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "Button_3C071467_3505_5021_41C0_9CD078438C82",
      "class": "Button",
      "data": {
       "name": "Button 2"
      },
      "fontColor": "#666666",
      "iconHeight": 32,
      "shadowColor": "#000000",
      "borderSize": 0,
      "shadowSpread": 1,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "label": "BUTTON 2",
      "paddingTop": 0
     },
     {
      "iconBeforeLabel": true,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontSize": 15,
      "paddingLeft": 0,
      "width": 100,
      "gap": 5,
      "paddingRight": 0,
      "rollOverFontColor": "#333333",
      "height": 44,
      "mode": "push",
      "layout": "horizontal",
      "fontFamily": "Arial",
      "textDecoration": "none",
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "iconWidth": 32,
      "fontWeight": "bold",
      "minHeight": 1,
      "visible": false,
      "borderColor": "#000000",
      "shadow": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "Button_3C5B5026_3507_7023_418D_5AEF13450F0A",
      "class": "Button",
      "data": {
       "name": "Button 3"
      },
      "fontColor": "#666666",
      "iconHeight": 32,
      "shadowColor": "#000000",
      "borderSize": 0,
      "shadowSpread": 1,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "label": "BUTTON 3",
      "paddingTop": 0
     },
     {
      "iconBeforeLabel": true,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontSize": 15,
      "paddingLeft": 0,
      "width": 100,
      "gap": 5,
      "paddingRight": 0,
      "rollOverFontColor": "#333333",
      "height": 44,
      "mode": "push",
      "layout": "horizontal",
      "fontFamily": "Arial",
      "textDecoration": "none",
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "iconWidth": 32,
      "fontWeight": "bold",
      "minHeight": 1,
      "visible": false,
      "borderColor": "#000000",
      "shadow": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "Button_3C6B7BF5_3505_5021_41B1_F65D95672705",
      "class": "Button",
      "data": {
       "name": "Button 4"
      },
      "fontColor": "#666666",
      "iconHeight": 32,
      "shadowColor": "#000000",
      "borderSize": 0,
      "shadowSpread": 1,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "label": "BUTTON 4",
      "paddingTop": 0
     },
     {
      "iconBeforeLabel": true,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontSize": 15,
      "paddingLeft": 0,
      "width": 100,
      "gap": 5,
      "paddingRight": 0,
      "rollOverFontColor": "#333333",
      "height": 44,
      "mode": "push",
      "layout": "horizontal",
      "fontFamily": "Arial",
      "textDecoration": "none",
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "iconWidth": 32,
      "fontWeight": "bold",
      "minHeight": 1,
      "visible": false,
      "borderColor": "#000000",
      "shadow": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "Button_3CEEAFAF_3503_3022_41C0_CA2D5491E345",
      "class": "Button",
      "data": {
       "name": "Button 5"
      },
      "fontColor": "#666666",
      "iconHeight": 32,
      "shadowColor": "#000000",
      "borderSize": 0,
      "shadowSpread": 1,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "label": "BUTTON 5",
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "paddingLeft": 0,
    "width": 796,
    "paddingRight": 0,
    "height": 70.95,
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingBottom": 0,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "top": 0,
    "verticalAlign": "middle",
    "minHeight": 1,
    "shadow": false,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "id": "Container_3D9A43EF_350D_5021_41B3_B4C8121813DC",
    "scrollBarMargin": 2,
    "class": "Container",
    "data": {
     "name": "Container button set"
    },
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "right": 29,
    "paddingTop": 0
   },
   {
    "paddingLeft": 0,
    "width": "18.697%",
    "paddingRight": 0,
    "height": "38.406%",
    "maxHeight": 621,
    "url": "skin/Image_5C2684E6_51E0_EAC0_41A2_234016861304.png",
    "paddingBottom": 0,
    "minWidth": 1,
    "maxWidth": 1651,
    "scaleMode": "fit_inside",
    "shadow": false,
    "top": "7.95%",
    "verticalAlign": "middle",
    "minHeight": 1,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "left",
    "id": "Image_5C2684E6_51E0_EAC0_41A2_234016861304",
    "class": "Image",
    "data": {
     "name": "Logo Siglo"
    },
    "click": "this.openLink(\"http://www.sigloxxirealestate.com\", \"_blank\")",
    "borderSize": 0,
    "left": "1.03%",
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0
   }
  ],
  "gap": 10,
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "30%",
  "maxHeight": 300,
  "layout": "absolute",
  "overflow": "scroll",
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "top": 0,
  "verticalAlign": "top",
  "minHeight": 1,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_32774EFE_3505_5022_41AB_699D4C74C8C0",
  "scrollBarMargin": 2,
  "class": "Container",
  "data": {
   "name": "-- Top Button Set"
  },
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "left": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": 65,
  "overflow": "scroll",
  "layout": "horizontal",
  "children": [
   {
    "children": [
     {
      "iconURL": "skin/IconButton_3E2C321F_3502_D3E2_419D_8A2025B26569.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E2C321F_3502_D3E2_419D_8A2025B26569",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E2C321F_3502_D3E2_419D_8A2025B26569_rollover.png",
      "click": "this.setComponentVisibility(this.Container_A2494875_AB86_D9F6_41D3_00901056DC7D, true, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "IconButton info"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E47C9E7_3505_7022_41BD_024D370E2AE5.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E47C9E7_3505_7022_41BD_024D370E2AE5",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E47C9E7_3505_7022_41BD_024D370E2AE5_rollover.png",
      "click": "this.setComponentVisibility(this.Container_9C553A8E_AB8E_0B13_41D4_DF95E035977E, true, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "IconButton thumblist"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E40AEDD_3505_D061_41B4_F595162440A5.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E40AEDD_3505_D061_41B4_F595162440A5",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E40AEDD_3505_D061_41B4_F595162440A5_rollover.png",
      "click": "this.setComponentVisibility(this.Container_F34A2A86_C479_A40A_41A2_B1FF7D2C96C3, true, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "IconButton photos"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3EB54ABC_3505_D026_41C7_B6D109BBE079.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3EB54ABC_3505_D026_41C7_B6D109BBE079",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3EB54ABC_3505_D026_41C7_B6D109BBE079_rollover.png",
      "borderSize": 0,
      "data": {
       "name": "IconButton video"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E425B6C_3505_3027_419D_F8EE412FAD22.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E425B6C_3505_3027_419D_F8EE412FAD22",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E425B6C_3505_3027_419D_F8EE412FAD22_rollover.png",
      "click": "this.setComponentVisibility(this.Container_CB02DE37_C4B8_DC09_41D1_FB0CC42B2C4D, true, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "IconButton floorplan"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     "this.IconButton_987D11CE_AB8A_1913_41DF_8EC1868E37DC",
     {
      "iconURL": "skin/IconButton_3EAD1E54_3505_7066_41C6_5B037E79F14B.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3EAD1E54_3505_7066_41C6_5B037E79F14B",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3EAD1E54_3505_7066_41C6_5B037E79F14B_rollover.png",
      "borderSize": 0,
      "data": {
       "name": "IconButton share"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_3E73F272_3505_3023_419A_78C711313BF0_pressed.png",
      "iconURL": "skin/IconButton_3E73F272_3505_3023_419A_78C711313BF0.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "toggle",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E73F272_3505_3023_419A_78C711313BF0",
      "class": "IconButton",
      "data": {
       "name": "IconButton audio"
      },
      "borderSize": 0,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_BCD6794E_AB86_5B15_41E3_D9E19DB27D59_pressed.png",
      "iconURL": "skin/IconButton_BCD6794E_AB86_5B15_41E3_D9E19DB27D59.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "toggle",
      "maxHeight": 42,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_BCD6794E_AB86_5B15_41E3_D9E19DB27D59",
      "class": "IconButton",
      "data": {
       "name": "IconButton sticker"
      },
      "click": "if(!this.Container_BC28EAB1_AB8A_B90E_41D7_F33B9A59E172.get('visible')){ this.setComponentVisibility(this.Container_BC28EAB1_AB8A_B90E_41D7_F33B9A59E172, true, 0, null, null, false) } else if(this.Container_BC28EAB1_AB8A_B90E_41D7_F33B9A59E172.get('visible')){ this.setComponentVisibility(this.Container_BC28EAB1_AB8A_B90E_41D7_F33B9A59E172, false, 0, null, null, false) }",
      "borderSize": 0,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E5715FE_3506_F022_41C7_69F28F956630.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E5715FE_3506_F022_41C7_69F28F956630",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E5715FE_3506_F022_41C7_69F28F956630_rollover.png",
      "borderSize": 0,
      "data": {
       "name": "IconButton20715"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3EBD7414_3507_57E7_41A8_71BC78AC14A9.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3EBD7414_3507_57E7_41A8_71BC78AC14A9",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3EBD7414_3507_57E7_41A8_71BC78AC14A9_rollover.png",
      "click": "this.openLink(\"http://https://www.facebook.com/SIGLO-XXI-Bienes-Ra%C3%ADces-623743574346858\", \"_blank\"); this.openLink(\"http://www.facebook.com/SIGLO-XXI-Bienes-Ra%C3%ADces-623743574346858\", \"_blank\")",
      "borderSize": 0,
      "data": {
       "name": "IconButton21206"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E599005_3507_6FE6_41C2_E25F90632253.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E599005_3507_6FE6_41C2_E25F90632253",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E599005_3507_6FE6_41C2_E25F90632253_rollover.png",
      "borderSize": 0,
      "data": {
       "name": "IconButton21697"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_3E521EDF_3507_3061_41BE_068816534676.png",
      "paddingLeft": 0,
      "width": 42,
      "paddingRight": 0,
      "height": 42,
      "mode": "push",
      "maxHeight": 42,
      "transparencyActive": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 42,
      "shadow": false,
      "verticalAlign": "middle",
      "minHeight": 1,
      "visible": false,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_3E521EDF_3507_3061_41BE_068816534676",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_3E521EDF_3507_3061_41BE_068816534676_rollover.png",
      "borderSize": 0,
      "data": {
       "name": "IconButton22194"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     }
    ],
    "gap": 16,
    "paddingLeft": 14,
    "width": "100%",
    "paddingRight": 0,
    "height": "100%",
    "overflow": "scroll",
    "layout": "horizontal",
    "paddingBottom": 0,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "minHeight": 1,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "id": "Container_3FDD9A3B_3503_5021_41A0_4C4806E8A7FA",
    "class": "Container",
    "data": {
     "name": "Container Button Set"
    },
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": 0,
  "id": "Container_3FD4E3AD_3502_D026_41C2_249F6179061B",
  "class": "Container",
  "data": {
   "name": "-- Down Button Set"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "left",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": 0,
  "borderRadius": 0,
  "backgroundOpacity": 0.8,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "100%",
  "overflow": "scroll",
  "layout": "absolute",
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "gap": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingLeft": 0,
    "layout": "absolute",
    "paddingRight": 0,
    "maxHeight": 700,
    "overflow": "visible",
    "children": [
     {
      "selectedItemBorderColor": "#00B0E9",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "itemHorizontalAlign": "center",
      "itemBackgroundColorDirection": "vertical",
      "paddingRight": 30,
      "itemBackgroundColor": [],
      "itemLabelHorizontalAlign": "center",
      "itemLabelPosition": "bottom",
      "backgroundColorRatios": [
       0
      ],
      "rollOverItemBackgroundColor": [
       "#00B0E9"
      ],
      "minWidth": 1,
      "selectedItemLabelFontWeight": "bold",
      "selectedItemBackgroundColorRatios": [
       0.19
      ],
      "shadow": false,
      "itemPaddingTop": 3,
      "itemLabelFontFamily": "Lucida Sans Unicode",
      "itemBorderRadius": 0,
      "itemMinHeight": 50,
      "rollOverItemLabelFontColor": "#00B0E9",
      "scrollBarMargin": 0,
      "scrollBarOpacity": 0.7,
      "itemThumbnailShadow": false,
      "rollOverItemBackgroundOpacity": 0,
      "scrollBarColor": "#04A3E1",
      "class": "ThumbnailGrid",
      "selectedItemBackgroundColor": [
       "#00B0E9"
      ],
      "itemThumbnailWidth": 300,
      "rollOverItemBackgroundColorRatios": [
       0
      ],
      "itemMaxHeight": 1000,
      "itemBackgroundOpacity": 0,
      "borderSize": 0,
      "itemMinWidth": 50,
      "itemHeight": 200,
      "itemLabelGap": 7,
      "itemLabelFontColor": "#333333",
      "backgroundColorDirection": "vertical",
      "paddingTop": 80,
      "gap": 20,
      "itemThumbnailBorderRadius": 0,
      "itemPaddingLeft": 3,
      "itemVerticalAlign": "bottom",
      "paddingLeft": 30,
      "width": "100%",
      "itemThumbnailOpacity": 1,
      "itemOpacity": 1,
      "height": "100%",
      "itemThumbnailScaleMode": "fit_outside",
      "paddingBottom": 80,
      "scrollBarWidth": 10,
      "itemPaddingRight": 3,
      "verticalAlign": "middle",
      "playList": "this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist",
      "minHeight": 1,
      "rollOverItemBorderColor": "#00B0E9",
      "itemLabelFontWeight": "normal",
      "itemLabelTextDecoration": "none",
      "itemLabelFontStyle": "normal",
      "propagateClick": false,
      "itemPaddingBottom": 3,
      "bottom": 0,
      "id": "ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692",
      "itemWidth": 320,
      "data": {
       "name": "ThumbnailList"
      },
      "itemMode": "normal",
      "horizontalAlign": "center",
      "left": 0,
      "selectedItemLabelFontColor": "#00B0E9",
      "borderRadius": 0,
      "itemBackgroundColorRatios": [],
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "itemMaxWidth": 1000,
      "itemThumbnailHeight": 170,
      "itemLabelFontSize": 13
     },
     {
      "iconURL": "skin/IconButton_9C552A8E_AB8E_0B13_41CD_E325004F459D.png",
      "paddingLeft": 0,
      "width": 30,
      "paddingRight": 0,
      "height": 30,
      "mode": "push",
      "maxHeight": 40,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 40,
      "maxWidth": 40,
      "shadow": false,
      "top": 20,
      "verticalAlign": "middle",
      "minHeight": 40,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_9C552A8E_AB8E_0B13_41CD_E325004F459D",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_9C552A8E_AB8E_0B13_41CD_E325004F459D_rollover.png",
      "click": "this.setComponentVisibility(this.Container_9C553A8E_AB8E_0B13_41D4_DF95E035977E, false, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "right": 20,
      "paddingTop": 0
     }
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "minWidth": 1,
    "maxWidth": 1200,
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "top": "5%",
    "verticalAlign": "top",
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "bottom": "5%",
    "id": "Container_9C554A8E_AB8E_0B12_41E0_F5DC2E19ADD3",
    "scrollBarMargin": 2,
    "class": "Container",
    "data": {
     "name": "ContainerGlobal"
    },
    "creationPolicy": "delayed",
    "horizontalAlign": "center",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "5%",
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "right": "5%",
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "visible": false,
  "propagateClick": false,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_9C553A8E_AB8E_0B13_41D4_DF95E035977E",
  "scrollBarMargin": 2,
  "class": "Container",
  "data": {
   "name": "--- PANO LIST"
  },
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundOpacity": 0.5,
  "right": "0%",
  "paddingTop": 0
 },
 {
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "gap": 10,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingLeft": 0,
    "width": "95%",
    "paddingRight": 0,
    "height": "95%",
    "maxHeight": 420,
    "layout": "absolute",
    "overflow": "scroll",
    "children": [
     {
      "backgroundColorDirection": "vertical",
      "gap": 17,
      "backgroundColor": [
       "#000000"
      ],
      "paddingLeft": 0,
      "width": "100%",
      "paddingRight": 0,
      "height": "100%",
      "overflow": "scroll",
      "layout": "horizontal",
      "children": [
       {
        "paddingLeft": 10,
        "width": "50.97%",
        "paddingRight": 10,
        "height": "75.238%",
        "paddingBottom": 10,
        "minWidth": 1,
        "scrollBarWidth": 8,
        "shadow": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "scrollBarMargin": 0,
        "propagateClick": false,
        "scrollBarOpacity": 0.8,
        "id": "HTMLText_A1D9C7A7_AB8E_B712_41E2_17C843DB1F23",
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:35px;\"><B>House Info</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:25px;\"><B><I>Subtitle</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl lorem, condimentum nec pharetra ac, fringilla at quam. Nam gravida efficitur dui vitae auctor. Donec in ultricies orci, in sodales risus. Aliquam lacinia velit felis, vitae ullamcorper quam aliquam in. Phasellus vitae massa condimentum, tincidunt lacus a, faucibus lorem. Duis vitae rutrum dui. Aliquam erat volutpat. Integer bibendum maximus nulla eu ultrices. Nam sed dignissim risus. Mauris molestie libero ut imperdiet mattis. In eget nulla vel leo pharetra volutpat quis vel odio. Quisque tincidunt, dui sed egestas laoreet, augue tellus tincidunt ligula, eu consectetur dolor purus quis nisl. Morbi rhoncus vel magna malesuada dictum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;\">Duis pretium, tortor sit amet mollis pharetra, dolor tellus mattis justo, at consequat purus enim eu velit. Duis cursus urna tellus.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;\">In nec urna eu urna tincidunt commodo nec quis dolor. Nulla consectetur, justo sed scelerisque congue, dolor ex pharetra velit, et dapibus lorem quam vel sapien. Cras justo dui, consequat et blandit at, consectetur in justo. Nulla posuere nulla libero, et tempus risus lobortis vitae. Nunc sed posuere diam. Phasellus non mauris lacus.</SPAN></SPAN></DIV></div>",
        "class": "HTMLText",
        "data": {
         "name": "HTMLText"
        },
        "scrollBarColor": "#3399FF",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingTop": 10
       },
       {
        "paddingLeft": 0,
        "width": "32.825%",
        "paddingRight": 0,
        "height": "56.429%",
        "maxHeight": 237,
        "url": "skin/Image_A1EF5EE1_AB8B_F90F_41DE_A0A37DA6AE51.jpg",
        "paddingBottom": 0,
        "minWidth": 1,
        "maxWidth": 237,
        "scaleMode": "fit_inside",
        "shadow": false,
        "verticalAlign": "middle",
        "minHeight": 1,
        "propagateClick": false,
        "horizontalAlign": "center",
        "id": "Image_A1EF5EE1_AB8B_F90F_41DE_A0A37DA6AE51",
        "class": "Image",
        "data": {
         "name": "Image"
        },
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingTop": 0
       }
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "minWidth": 1,
      "scrollBarWidth": 10,
      "shadow": false,
      "minHeight": 1,
      "scrollBarVisible": "rollOver",
      "top": "0%",
      "verticalAlign": "middle",
      "propagateClick": false,
      "scrollBarOpacity": 0.5,
      "horizontalAlign": "center",
      "id": "Container_A24A9875_AB86_D9F7_41DF_3FD6AAA3AC78",
      "scrollBarMargin": 2,
      "class": "Container",
      "data": {
       "name": "Container 1"
      },
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "borderSize": 0,
      "contentOpaque": false,
      "left": "0%",
      "borderRadius": 0,
      "backgroundOpacity": 0.7,
      "paddingTop": 0
     },
     {
      "iconURL": "skin/IconButton_A2497875_AB86_D9F6_41D9_3437A3F13E30.png",
      "paddingLeft": 0,
      "width": 30,
      "paddingRight": 0,
      "height": 30,
      "mode": "push",
      "maxHeight": 153,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 152,
      "shadow": false,
      "top": 20,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_A2497875_AB86_D9F6_41D9_3437A3F13E30",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_A2497875_AB86_D9F6_41D9_3437A3F13E30_rollover.png",
      "click": "this.setComponentVisibility(this.Container_A2494875_AB86_D9F6_41D3_00901056DC7D, false, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "right": 20,
      "paddingTop": 0
     }
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "minWidth": 1,
    "maxWidth": 722,
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "id": "Container_A24AB875_AB86_D9F7_41CC_BB35A4852AEB",
    "class": "Container",
    "data": {
     "name": "Container global"
    },
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "backgroundOpacity": 0.3,
    "paddingTop": 0
   }
  ],
  "gap": 10,
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "100%",
  "overflow": "scroll",
  "layout": "horizontal",
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "verticalAlign": "middle",
  "minHeight": 1,
  "visible": false,
  "shadow": false,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "center",
  "id": "Container_A2494875_AB86_D9F6_41D3_00901056DC7D",
  "scrollBarMargin": 2,
  "class": "Container",
  "data": {
   "name": "-- INFO"
  },
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "left": "0%",
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "backgroundColor": [
     "#000000"
    ],
    "paddingLeft": 20,
    "width": 393,
    "paddingRight": 20,
    "height": 160,
    "backgroundColorRatios": [
     0
    ],
    "paddingBottom": 20,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "bottom": 0,
    "id": "HTMLText_390E73D8_351F_D06F_41BC_BEB11D65FEC4",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:31px;\"><B>TITLE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. </SPAN></SPAN></DIV></div>",
    "class": "HTMLText",
    "data": {
     "name": "Sticker 1"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "borderRadius": 0,
    "backgroundOpacity": 0.5,
    "right": 0,
    "paddingTop": 25
   }
  ],
  "gap": 10,
  "paddingLeft": 0,
  "width": 393,
  "paddingRight": 0,
  "height": 160,
  "overflow": "scroll",
  "layout": "absolute",
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "minHeight": 1,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": 90,
  "id": "Container_BC28EAB1_AB8A_B90E_41D7_F33B9A59E172",
  "class": "Container",
  "data": {
   "name": "- CONTAINER STICKER"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "left",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "right": 20,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "width": "92%",
  "paddingRight": 0,
  "height": "64%",
  "maxHeight": 400,
  "layout": "absolute",
  "overflow": "scroll",
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "gap": 10,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingLeft": 20,
    "layout": "absolute",
    "paddingRight": 20,
    "overflow": "scroll",
    "children": [
     {
      "progressBackgroundOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingRight": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "minWidth": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "progressHeight": 10,
      "playbackBarHeight": 10,
      "shadow": false,
      "playbackBarHeadWidth": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "class": "ViewerArea",
      "playbackBarProgressOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "borderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "progressBarBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarLeft": 0,
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "paddingLeft": 0,
      "width": "100%",
      "height": "100%",
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "playbackBarHeadHeight": 15,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipPaddingLeft": 6,
      "toolTipFontSize": 12,
      "progressBackgroundColorDirection": "vertical",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "progressBarBorderRadius": 0,
      "top": "0%",
      "propagateClick": false,
      "playbackBarHeadBorderColor": "#000000",
      "transitionMode": "blending",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "playbackBarBottom": 0,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "id": "MapViewer",
      "playbackBarHeadShadow": true,
      "playbackBarHeadShadowColor": "#000000",
      "left": "0%",
      "playbackBarHeadOpacity": 1,
      "progressBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 4,
      "borderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0
     },
     {
      "iconURL": "skin/IconButton_CB02AE37_C4B8_DC09_41E8_7EBDE6B7D42D.png",
      "paddingLeft": 0,
      "width": 60,
      "paddingRight": 0,
      "height": 60,
      "mode": "push",
      "maxHeight": 40,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 1,
      "maxWidth": 40,
      "shadow": false,
      "top": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "id": "IconButton_CB02AE37_C4B8_DC09_41E8_7EBDE6B7D42D",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_CB02AE37_C4B8_DC09_41E8_7EBDE6B7D42D_rollover.png",
      "click": "this.setComponentVisibility(this.Container_CB02DE37_C4B8_DC09_41D1_FB0CC42B2C4D, false, 0, null, null, false)",
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "right": 0,
      "paddingTop": 0
     }
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 20,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "top": "0%",
    "verticalAlign": "top",
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "bottom": "0%",
    "id": "Container_CB028E37_C4B8_DC09_418D_AAD7802F55DF",
    "scrollBarMargin": 2,
    "class": "Container",
    "data": {
     "name": "Container global"
    },
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "0%",
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "right": "0%",
    "paddingTop": 20
   }
  ],
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 550,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "top": 100,
  "visible": false,
  "propagateClick": false,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_CB02DE37_C4B8_DC09_41D1_FB0CC42B2C4D",
  "scrollBarMargin": 2,
  "class": "Container",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundOpacity": 0.7,
  "right": 20,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "100%",
  "overflow": "scroll",
  "layout": "absolute",
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "gap": 10,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "paddingLeft": 0,
    "layout": "absolute",
    "paddingRight": 0,
    "overflow": "scroll",
    "children": [
     {
      "progressBackgroundOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingRight": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBottom": 2,
      "playbackBarProgressBorderColor": "#000000",
      "minWidth": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBorderSize": 0,
      "progressHeight": 10,
      "playbackBarHeight": 10,
      "shadow": false,
      "playbackBarHeadWidth": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "progressLeft": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderColor": "#767676",
      "class": "ViewerArea",
      "playbackBarProgressOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "borderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarRight": 0,
      "transitionDuration": 500,
      "progressBarBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarLeft": 0,
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "toolTipShadowSpread": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "paddingLeft": 0,
      "width": "100%",
      "height": "100%",
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "playbackBarHeadHeight": 15,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipPaddingLeft": 6,
      "toolTipFontSize": 12,
      "progressBackgroundColorDirection": "vertical",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "progressBarBorderRadius": 0,
      "top": "0%",
      "propagateClick": false,
      "playbackBarHeadBorderColor": "#000000",
      "transitionMode": "blending",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "playbackBarBottom": 0,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "id": "ViewerAreaLabeled_F34A6A86_C479_A40A_41D6_B780A2533FF8",
      "playbackBarHeadShadow": true,
      "playbackBarHeadShadowColor": "#000000",
      "left": "0%",
      "playbackBarHeadOpacity": 1,
      "progressBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 4,
      "borderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0
     },
     {
      "pressedIconURL": "skin/IconButton_F34A1A86_C479_A40A_41E2_A8733B38AAF9_pressed.png",
      "iconURL": "skin/IconButton_F34A1A86_C479_A40A_41E2_A8733B38AAF9.png",
      "paddingLeft": 0,
      "width": 150,
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 50,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 40,
      "maxWidth": 50,
      "shadow": false,
      "top": "45.14%",
      "verticalAlign": "middle",
      "minHeight": 40,
      "propagateClick": false,
      "cursor": "hand",
      "bottom": "44.86%",
      "id": "IconButton_F34A1A86_C479_A40A_41E2_A8733B38AAF9",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_F34A1A86_C479_A40A_41E2_A8733B38AAF9_rollover.png",
      "horizontalAlign": "center",
      "borderSize": 0,
      "data": {
       "name": ">"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "right": "0.91%",
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_F34A0A86_C479_A40A_41D2_7C25FAD61512_pressed.png",
      "iconURL": "skin/IconButton_F34A0A86_C479_A40A_41D2_7C25FAD61512.png",
      "paddingLeft": 0,
      "width": 150,
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 50,
      "transparencyActive": true,
      "paddingBottom": 0,
      "minWidth": 40,
      "maxWidth": 50,
      "shadow": false,
      "top": "45%",
      "verticalAlign": "middle",
      "minHeight": 40,
      "propagateClick": false,
      "cursor": "hand",
      "bottom": "45%",
      "id": "IconButton_F34A0A86_C479_A40A_41D2_7C25FAD61512",
      "class": "IconButton",
      "rollOverIconURL": "skin/IconButton_F34A0A86_C479_A40A_41D2_7C25FAD61512_rollover.png",
      "horizontalAlign": "center",
      "borderSize": 0,
      "data": {
       "name": "<"
      },
      "left": "1%",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     "this.IconButton_F34A3A86_C479_A40A_41C8_9D4F5D644DEF"
    ],
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "minWidth": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "top": "12%",
    "verticalAlign": "top",
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "bottom": "12%",
    "id": "Container_F34A7A86_C479_A40A_41B5_4B54486C6D8F",
    "scrollBarMargin": 2,
    "class": "Container",
    "data": {
     "name": "Global"
    },
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "16%",
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "right": "16%",
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "visible": false,
  "propagateClick": false,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_F34A2A86_C479_A40A_41A2_B1FF7D2C96C3",
  "scrollBarMargin": 2,
  "class": "Container",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "0%",
  "borderRadius": 0,
  "backgroundOpacity": 0.8,
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailGrid_9C555A8E_AB8E_0B12_41C4_9713E4426692_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "gap": 10,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "class": "Player",
 "data": {
  "name": "Player448"
 },
 "creationPolicy": "delayed",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "paddingTop": 0
})