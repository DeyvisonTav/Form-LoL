import { Input } from './Input'
import { ArrowRight } from 'phosphor-react'
import { Button } from './Button'

export function Form() {
  return (
    <div className="h-scren w-full flex flex-col justify-center items-center ">
      <h1 className=" pt-12">
        <img
          className="h-9"
          src="./src/img/riot-games.svg"
          alt="Logo-Riot-Games"
        />
      </h1>

      <h1 className="h-full text-center flex  font-bold text-2xl pt-10">
        Fazer login
      </h1>

      <form className="flex flex-col pb-36 ">
        <Input placeholder="Nome de usuario" type="text" />
        <Input placeholder="Senha" type="password" />
        <Button/>
        <div>
          <input className="h-3 w-4" type="checkbox" />{' '}
          <span className=" text-sm font-bold text-center">Mater login</span>
        </div>
      </form>
      <div>
        <button className="mb-6 bg-zinc-100 bg-opacity-40 p-4 py-4 rounded-[1.25rem] border-[3px]">
          <ArrowRight
            className="text-zinc-300 opacity-50 font-bold"
            size={28}
          />
        </button>
      </div>
      <div className="flex flex-col text-center mb-5 mt-5 ">
        <a className=" text-zinc-600 opacity-50 font-bold cursor-pointer text-sm  hover:text-black hover:opacity-100  transition-all duration-150 ">
          Não consegue inicar sessão
        </a>
        <a className=" text-zinc-600 opacity-50 font-bold cursor-pointer text-sm  hover:text-black hover:opacity-100 transition-all duration-150">
          Criar conta
        </a>
      </div>
    </div>
  )
}
