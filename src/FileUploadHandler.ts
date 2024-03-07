import { supabase } from '@/supabase'
import type { Tables } from './database/supabase'

const bucketName = 'images'
const boardImagesPath = bucketName + '/board'
const vipsImagesPath = bucketName + '/vip'

async function createBoardPerson(
  person: Tables<'BoardPersons'>,
  imageLocalPath: string
): Promise<{ data: Tables<'BoardPersons'> | null; error: string | null }> {
  // Upload Image
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload('file_path', imageLocalPath)
  if (error) {
    return { data: null, error: error.message }
  }
  // Get Path from image
  const remoteImagePath = data.path

  // Insert person
  const { dataPerson, errorPerson } = await supabase
    .from('BoardPersons')
    .insert([
      {
        email: person.email,
        function: person.function,
        imageSrc: remoteImagePath,
        name: person.name,
        tel: person.tel
      }
    ])
    .select()
  if (dataPerson.error) {
    return { data: null, error: dataPerson.error.message }
  }
  return { data: dataPerson, error: null }
}

export { createBoardPerson }
