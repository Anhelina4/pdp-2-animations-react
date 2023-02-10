import { TextureTextWrapper } from './TextureText.styled'

const TextureText = () => {
  return (
    <TextureTextWrapper>
      <svg width="400" height="400" viewbox="0 0 20 20 ">
        <defs>
          <mask id="texture">
            <image
              height="400"
              width="800"
              href="https://png.pngtree.com/background/20210717/original/pngtree-marble-black-background-picture-image_1440025.jpg"></image>
          </mask>
        </defs>
        <text x="50%" y="50%" mask="url(#texture)">
          Texture
        </text>
      </svg>
    </TextureTextWrapper>
  )
}

export default TextureText
