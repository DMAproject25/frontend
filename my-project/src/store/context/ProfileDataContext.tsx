import { createContext, useContext, useState, ReactNode } from 'react'
import { ReactElement } from 'react'

// Тип одного элемента личной информации
export type PersonalDataItem = {
	id: number
	label: string[]
	icon: ReactElement
}

// Тип контекста
type ProfileDataContextType = {
	personalData: PersonalDataItem[]
	setPersonalData: React.Dispatch<React.SetStateAction<PersonalDataItem[]>>
}

// Создаем контекст с дефолтным значением null (потом проверим его наличие)
const ProfileDataContext = createContext<ProfileDataContextType | null>(null)

// Провайдер
export const ProfileDataProvider = ({ children }: { children: ReactNode }) => {
	const [personalData, setPersonalData] = useState<PersonalDataItem[]>([])

	return (
		<ProfileDataContext.Provider value={{ personalData, setPersonalData }}>
			{children}
		</ProfileDataContext.Provider>
	)
}

// Хук, который ты будешь юзать в любом компоненте
export const useProfileData = () => {
	const context = useContext(ProfileDataContext)
	if (!context) {
		throw new Error('useProfileData must be used within a ProfileDataProvider')
	}
	return context
}
