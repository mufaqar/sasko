import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'
import { Search } from '../search/Search'

const ActivityDrawer: FC = () => (
  <div
    id='kt_activities'
    className='bg-body'
    data-kt-drawer='true'
    data-kt-drawer-name='activities'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'300px', 'lg': '400px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle='#kt_activities_toggle'
    data-kt-drawer-close='#kt_activities_close'
  >
    <div className='card shadow-none rounded-0 w-full' >
      <div className='card-header' id='kt_activities_header'>
        <h3 className='card-title fw-bolder text-dark'>Activity Logs</h3>

        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id='kt_activities_close'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative' id='kt_activities_body'>
        <div className='right-bar-search'>
           <div className='btn btn-icon btn-active-light-primary w-30px p-4 h-30px w-md-40px h-md-40px'>
            <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-1' />
          </div>
            <input type='text' name="search" className='form-control form-control-flush ps-10' data-kt-search-element="input" placeholder='search...'/>
        </div>
      </div>
    </div>
  </div>
)

export {ActivityDrawer}
