import React from 'react'
import { redirect } from "next/navigation"
import { auth } from '@clerk/nextjs'
import prismadb from '@/lib/prismadb'
import { SettingsForm } from './components/settings-form'

interface SettingsPageProps {
  params: {
    storeId: string
  }
}

const Settings: React.FC<SettingsPageProps>  = async ({
  params
}) => {

  const {userId} = auth()

  if(!userId){
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where:{
      id: params.storeId,
      userId
    }
  });

  if(!store){
    redirect("/");  
  }
  return (
    <div className='flex-col'>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initalData={store}/>
      </div>
    </div>
  )
}

export default Settings