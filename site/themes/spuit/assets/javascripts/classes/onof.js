/*
howto:

import Onof from 'onof'

document.addEventListener("DOMContentLoaded", function () {
  var onof = new Onof()
})

document.body.addEventListener('on.onof', function (e) {
  console.log(e)
})

document.body.addEventListener('off.onof', function (e) {
  console.log(e)
})

*/

export default class {
  constructor() {
    this.init()
  }
  init() {
    var elements = document.querySelectorAll('[data-onof]')
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]
      const scope = this
      el.onclick = function (e) {
        e.preventDefault()
        let className = scope.getClasstName(e)
        let targetElements = scope.getTargetElements(e)
        for (let index = 0; index < targetElements.length; index++) {
          const element = targetElements[index]
          let isActive = element.classList.toggle(className)

          //複数ターゲットがある場合、最初の要素のアクティブ状態を採用
          if (index === 0) {
            //trigger class
            if (isActive) {
              el.classList.add('on')
            } else {
              el.classList.remove('on')
            }

            //call event
            let evenType = 'off.onof'
            if (isActive) {
              evenType = 'on.onof'
            }
            scope.fireEvent(evenType, {
              active: isActive,
              target: element,
              trigger: el
            })
          }
        }
      }
    }
  }

  getClasstName(e) {
    let className = 'on'
    if (e.currentTarget.dataset.onof) {
      className = e.currentTarget.dataset.onof
    }
    return className
  }

  getTargetName(e) {
    let targetName
    if (e.currentTarget.dataset.onofTarget) {
      // if target is dataOnofTarget
      targetName = e.currentTarget.dataset.onofTarget
    } else if (e.currentTarget.href) {
      // if target is anchor
      let targetUrl = e.currentTarget.href
      let targetUrls = targetUrl.split('/')
      targetName = targetUrls[targetUrls.length - 1]
    }
    return targetName
  }

  getTargetElements(e) {
    let targetName = this.getTargetName(e)

    //TODO: [data-xxx]にも対応したい...
    
    if (targetName.indexOf('#') !== -1) {
      return [document.getElementById(targetName.replace('#', ''))]
    } else if (targetName.indexOf('.') !== -1) {
      return document.querySelectorAll(targetName)
    } else {
      return document.getElementsByTagName(targetName)
    }
    return []
  }

  fireEvent(eventName, detail) {
    let event
    try {
      event = new CustomEvent(eventName, { detail: detail })
    } catch (e) {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, false, false, detail)
    }
    document.body.dispatchEvent(event)
  }
}
