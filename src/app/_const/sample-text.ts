const ascii = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const mistakes = 'one -> 1\nsmall L -> l\nlarge I -> I\npipe -> |\nzero -> 0\nsmall O -> o\nlarge O -> O'
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const ligatures = '-> ->> >- >>- ->- ->>- => =>> >= >>= =>= =>>= >>-> >>=> |-> |=> ~> ~~> --> /> //=> |> ||> |||>\n<- <<- -< -<< -<- -<<- <= <<= =< =<<= =<= =<<= <-<< <=<< <-| <=| <~ <~~ </ <=// <!-- <| <|| <|||\n<-> <=> <<=>> <> <~> </> <|>\n/\ \/ _|_\n== === -- --- != !== =~ !~ =/= /= ^= .= :- := =:= .= =!=\n|- ||- |= ||= -| -|| =| =|| |-|-| |--|--| |=|=| || /=/ // ///\n[] [| |] {. .} .. ... ::: <:< ..< ::< !! ?. ?? ++ &&\n## ###'
const japanese = '日本語のテキストサンプルです。これは、さまざまなフォントやスタイルをテストするために使用されます。'
const korean = '한국어 텍스트 샘플입니다. 다양한 글꼴과 스타일을 테스트하는 데 사용됩니다.'
const chinese = '中文文本示例。用于测试各种字体和样式。'
const arabic = 'نموذج نص باللغة العربية. يستخدم لاختبار خطوط وأنماط مختلفة.'
const russian = 'Пример текста на русском языке. Используется для тестирования различных шрифтов и стилей.'
const thai = 'ตัวอย่างข้อความภาษาไทย ใช้สำหรับทดสอบฟอนต์และสไตล์ต่างๆ'
const italian = 'Esempio di testo in italiano. Utilizzato per testare vari caratteri e stili.'
const french = 'Exemple de texte en français. Utilisé pour tester différentes polices et styles.'
const spanish = 'Ejemplo de texto en español. Utilizado para probar diferentes fuentes y estilos.'
const german = 'Beispieltext auf Deutsch. Wird verwendet, um verschiedene Schriftarten und Stile zu testen.'
const portuguese = 'Exemplo de texto em português. Usado para testar várias fontes e estilos.'
const greek = 'Παράδειγμα κειμένου στα ελληνικά. Χρησιμοποιείται για τη δοκιμή διαφόρων γραμματοσειρών και στυλ.'
const hebrew = 'דוגמת טקסט בעברית. משמש לבדוק גופנים וסגנונות שונים.'
export const sampleTexts = {
  programming: {
    ascii,
    lorem,
    mistakes,
    symbols,
    ligatures,
  },
  languages: {
    japanese,
    korean,
    chinese,
    arabic,
    russian,
    thai,
    italian,
    french,
    spanish,
    german,
    portuguese,
    greek,
    hebrew,
  }
} as const
