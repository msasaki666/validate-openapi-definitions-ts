import * as core from '@actions/core'
import * as exec from '@actions/exec'

const parseArg = (arg: string): string[] => {
  const trimed = arg.trim()
  if (trimed === '') []

  return trimed.split(/\s+/)
}

try {
  const args = parseArg(core.getInput('args'))
  exec.exec('npx', ['@redocly/cli', 'lint', ...args])
} catch (error) {
  if (error instanceof Error) core.setFailed(error.message)
}
