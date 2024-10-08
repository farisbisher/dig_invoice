package com.ecobill.ecobill.services;

import java.util.List;
import java.util.Map;

import com.ecobill.ecobill.domain.dto.InvoiceItemDto;
import com.ecobill.ecobill.domain.entities.InvoiceEntity;

public interface InvoiceItemService {
    void createInvoiceItem(List<Map<String, Object>> invoiceItemsList, InvoiceEntity invoiceEntity);

    List<InvoiceItemDto> getInvoiceItemByQrCode(Long qrCode, Long id);

}
