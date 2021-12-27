import React, { MouseEventHandler, useEffect, useState } from 'react';

import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

import { supabase } from '../../src/utils/SupabaseClient';

async function InfluencerLink (){
  const router = useRouter()
  const { id } = router.query
  const { data, error } = await supabase
  .from('profiles')
  .select('id')
  .eq('id', id)
  return (
    <div>influencerId: {data}</div>
  )
}

export default InfluencerLink
