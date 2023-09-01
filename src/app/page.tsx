import Image from "next/image";
import { prisma } from "./db";
import Link from "next/link";
import TodoItem from "../components/TodoItem";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <>
      <header
        className="flex justify-between
      item-center mb-4"
      >
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded 
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
