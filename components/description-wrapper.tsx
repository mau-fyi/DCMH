"use server";
import React, { Suspense } from 'react'
import EditableDescription from './description';
import { getDescription } from '@/actions/description';

/**
 * Server-side entry point to description rendering
 * Handles async gathering of dependencies and suspense
 * */
export default async function Description() {
    const description = await getDescription();
    return (<Suspense fallback={<p>Loading description</p>}>
        <EditableDescription description={description}/>
    </Suspense>);
}
