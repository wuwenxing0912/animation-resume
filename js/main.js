function writeCode(preCode, code, fn) {
    var n = 0
    DOMCode = document.querySelector('#code')
    var result = preCode || ''
    var timeID = setInterval(() => {
        n++
        DOMCode.innerHTML = Prism.highlight(result + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = result + code.substring(0, n)
        DOMCode.scrollTop = DOMCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(timeID)
            fn()
        }
    }, 50)
}



var result = ` /**你好，我是吴文星
 * 文字做介绍太单调
 * 那我就做一份会动的简历来介绍我自己
 * 第一步写一些代码提供样式
 */

 
 /*第二步白色背景不好看，咱换个背景*/
 
 html{
    background : rgb(0,70,80); 
    color : rgb(200, 200, 200);   
    font-size : 18px;
 }
 /*给元素加上过度效果*/
 
 *{
     transition : all .3s;
 }

 /*字与边框靠的太近了*/
 #code{  
     border : 1px solid white;
     padding : 16px;
     float : left;
     left : 0;
     margin-top: 10px;
     margin-left : 30px;
     width : 46%;  
 }
 /*我需要代码高亮*/
 
 .token.selector {
    color: #690;
 }

  .token.property {
    color: rgb(187,137,0);
 }
 .token.function {
    color: rgb(180,100,130);
 }

 /*加点3D效果*/
 html{
     perspective : 1000px;
 }

 #code{
     transform : rotateY(10deg) translateZ(-90px);
 }


 /*第三步我需要一个简历编辑器*/
 
 #paperEdit{
     float : right;
     right : 0;
     margin-top : 40px;
     margin-right : 30px;
     width : 48%;
     height : 90vh;
     background : white;
 }
`

var result2 = `
 /*请看右边，开始写简历了*/
`

var md = `
## 吴文星
自学前端半年，希望应聘前端开发岗位

## 技能介绍
熟悉 JavaScript CSS

熟悉 JQuery
 
熟悉 vue

## 项目介绍
[个人简历](https://wuwenxing0912.github.io/resume/)

[canvas画板](https://wuwenxing0912.github.io/canvas-demo/)

[导航页面](https://wuwenxing0912.github.io/nav-demo/)

[无缝轮播](https://wuwenxing0912.github.io/slide-demo/)

## 相关链接及联系方式
[GitHub](https://github.com/wuwenxing0912)

[博客](https://wuwenxing0912.github.io/archives/)

手机 xxxxxxx
`

var result3 = `
/*写完了，Markdown显示不太友好*/

/*利用marked.js解析成HTML吧*/
`

var result4 = `
/*OK 完成 现在看上去还行*/`

writeCode('', result, () => {
    createPaperEdit(() => {
        writeCode(result, result2, () => {
            writeMarkdown(() => {
                writeCode(result + result2, result3, () => {
                    markdownToHTML(writeCode(result + result2 + result3, result4, () => {}))
                })
            })
        })
    })
})


function createPaperEdit(fn) {
    div = document.createElement('div')
    div.id = 'PaperEditWrapper'
    pre = document.createElement('pre')
    pre.id = 'paperEdit'
    div.appendChild(pre)
    document.body.appendChild(div)
    fn()
}

function writeMarkdown(fn) {
    var n = 0
    var paperEditCode = document.querySelector('#paperEdit')
    var timeID = setInterval(() => {
        n++
        paperEditCode.innerHTML = md.slice(0, n)
        if (n >= md.length) {
            window.clearInterval(timeID)
            fn()
        }
    }, 50)

}

function markdownToHTML(fn) {

    var paperEditCode = document.querySelector('#paperEdit')
    paperEditCode.innerHTML = marked(paperEditCode.innerHTML)
    fn
}