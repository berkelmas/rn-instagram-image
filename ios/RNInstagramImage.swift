//
//  RNInstagramImage.swift
//  RNInstagramImage
//
//  Copyright © 2020 Berk Elmas. All rights reserved.
//

import Foundation

@objc(RNInstagramImage)
class RNInstagramImage: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
