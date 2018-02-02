import resp from '@matthamlin/resp'

const sizes = {
  small: 640,
  medium: 832,
  large: 1024,
}

const { small, medium, large } = resp(sizes)

export { small, medium, large }
