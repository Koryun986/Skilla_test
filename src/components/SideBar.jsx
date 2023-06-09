import React from "react";
import "./styles/SideBar.css"
import SideBarRow from "../helpers/ui kit/SideBarRow";
import logo from "./../resorces/Skilla_logo.png";
import totalIcon from "./../resorces/SideBar_Icons/skilla_total.png";
import ordersIcon from "./../resorces/SideBar_Icons/skilla_orders.png";
import messagesIcon from "./../resorces/SideBar_Icons/skilla_messages.png";
import callsIcon from "./../resorces/SideBar_Icons/skilla_calls.png";
import contactsIcon from "./../resorces/SideBar_Icons/skilla_contacts.png";
import documentsIcon from "./../resorces/SideBar_Icons/skilla_documents.png";
import performersIcon from "./../resorces/SideBar_Icons/skilla_performers.png";
import reportsIcon from "./../resorces/SideBar_Icons/skilla_reports.png";
import knowledgeBaseIcon from "./../resorces/SideBar_Icons/skilla_konwledge_base.png";
import settingsIcon from "./../resorces/SideBar_Icons/skilla_settings.png";
import addOrderIcon from "./../resorces/SideBar_Button_Icons/skilla_add_order_btn.png";
import allertIcon from "./../resorces/SideBar_Button_Icons/skilla_allert_btn.png";
import SideBarPrimaryBtn from "../helpers/ui kit/SideBarPrimaryBtn";

export default function SideBar() {
  return <>
  <div className="SideBar">
    <SideBarRow>
      <img src={logo} alt="Skilla"/>
    </SideBarRow>
    <SideBarRow >
      <img src={totalIcon} className="SideBar_menu_icon"/>
      Итоги
    </SideBarRow>
    <SideBarRow>
    <img src={ordersIcon} className="SideBar_menu_icon"/>
      Заказы
    </SideBarRow>
    <SideBarRow>
    <img src={messagesIcon} className="SideBar_menu_icon"/>
      Сообщения
    </SideBarRow>
    <SideBarRow isActive>
    <img src={callsIcon} className="SideBar_menu_icon"/>
      Звонки
    </SideBarRow>
    <SideBarRow>
    <img src={contactsIcon} className="SideBar_menu_icon"/>
      Контрагенты
    </SideBarRow>
    <SideBarRow>
    <img src={documentsIcon} className="SideBar_menu_icon"/>
      Документы
    </SideBarRow>
    <SideBarRow>
    <img src={performersIcon} className="SideBar_menu_icon"/>
      Исполнители
    </SideBarRow>
    <SideBarRow>
      <img src={reportsIcon} className="SideBar_menu_icon"/>
      Отчёты
    </SideBarRow>
    <SideBarRow>
      <img src={knowledgeBaseIcon} className="SideBar_menu_icon"/>
      База Знаний
    </SideBarRow>
    <SideBarRow>
      <img src={settingsIcon} className="SideBar_menu_icon"/>
      Настройки
    </SideBarRow>

    <div className="SideBar_Buttons_layout">
      <SideBarPrimaryBtn title="Дабавить заказ" icon={addOrderIcon} />
      <SideBarPrimaryBtn title="Оплата" icon={allertIcon} />
    </div>

  </div>
  </>;
}
