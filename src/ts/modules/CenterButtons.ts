import { centerPanel } from './CenterPanel'

// 中间面板添加按钮的区域
class CenterButtons {
  public add(bg: string = '', text: string = '', attr: string[][] = []) {
    const e = document.createElement('button')
    e.type = 'button'
    e.style.backgroundColor = bg
    e.textContent = text

    for (const [key, value] of attr) {
      e.setAttribute(key, value)
    }

    centerPanel.useSlot('centerBtns', e)
    return e
  }

  public clear() {
    centerPanel.clearSlot('centerBtns')
  }
}

const centerButtons = new CenterButtons()
export { centerButtons }
