(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Se=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Se||{});function X(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function em(e){return X(e).filter(t=>isNaN(Number(t)))}function gt(e){return em(e).map(r=>e[r])}var tm=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,rm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,nm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,_s={Space_Separator:tm,ID_Start:rm,ID_Continue:nm},he={isSpaceSeparator(e){return typeof e=="string"&&_s.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||_s.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||_s.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Fo,Ne,Rt,Ki,lr,bt,De,wa,Ln;var im=function(t,r){Fo=String(t),Ne="start",Rt=[],Ki=0,lr=1,bt=0,De=void 0,wa=void 0,Ln=void 0;do De=sm(),um[Ne]();while(De.type!=="eof");return typeof r=="function"?To({"":Ln},"",r):Ln};function To(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),o=To(n,s,r);o===void 0?delete n[s]:Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=To(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let U,O,Fn,Bt,j;function sm(){for(U="default",O="",Fn=!1,Bt=1;;){j=Wt();const e=sd[U]();if(e)return e}}function Wt(){if(Fo[Ki])return String.fromCodePoint(Fo.codePointAt(Ki))}function b(){const e=Wt();return e===`
`?(lr++,bt=0):e?bt+=e.length:bt++,e&&(Ki+=e.length),e}const sd={default(){switch(j){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":b();return;case"/":b(),U="comment";return;case void 0:return b(),re("eof")}if(he.isSpaceSeparator(j)){b();return}return sd[Ne]()},comment(){switch(j){case"*":b(),U="multiLineComment";return;case"/":b(),U="singleLineComment";return}throw ne(b())},multiLineComment(){switch(j){case"*":b(),U="multiLineCommentAsterisk";return;case void 0:throw ne(b())}b()},multiLineCommentAsterisk(){switch(j){case"*":b();return;case"/":b(),U="default";return;case void 0:throw ne(b())}b(),U="multiLineComment"},singleLineComment(){switch(j){case`
`:case"\r":case"\u2028":case"\u2029":b(),U="default";return;case void 0:return b(),re("eof")}b()},value(){switch(j){case"{":case"[":return re("punctuator",b());case"n":return b(),vr("ull"),re("null",null);case"t":return b(),vr("rue"),re("boolean",!0);case"f":return b(),vr("alse"),re("boolean",!1);case"-":case"+":b()==="-"&&(Bt=-1),U="sign";return;case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),vr("nfinity"),re("numeric",1/0);case"N":return b(),vr("aN"),re("numeric",NaN);case'"':case"'":Fn=b()==='"',O="",U="string";return}throw ne(b())},identifierNameStartEscape(){if(j!=="u")throw ne(b());b();const e=No();switch(e){case"$":case"_":break;default:if(!he.isIdStartChar(e))throw gu();break}O+=e,U="identifierName"},identifierName(){switch(j){case"$":case"_":case"‌":case"‍":O+=b();return;case"\\":b(),U="identifierNameEscape";return}if(he.isIdContinueChar(j)){O+=b();return}return re("identifier",O)},identifierNameEscape(){if(j!=="u")throw ne(b());b();const e=No();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!he.isIdContinueChar(e))throw gu();break}O+=e,U="identifierName"},sign(){switch(j){case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),vr("nfinity"),re("numeric",Bt*(1/0));case"N":return b(),vr("aN"),re("numeric",NaN)}throw ne(b())},zero(){switch(j){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return;case"x":case"X":O+=b(),U="hexadecimal";return}return re("numeric",Bt*0)},decimalInteger(){switch(j){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},decimalPointLeading(){if(he.isDigit(j)){O+=b(),U="decimalFraction";return}throw ne(b())},decimalPoint(){switch(j){case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b(),U="decimalFraction";return}return re("numeric",Bt*Number(O))},decimalFraction(){switch(j){case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},decimalExponent(){switch(j){case"+":case"-":O+=b(),U="decimalExponentSign";return}if(he.isDigit(j)){O+=b(),U="decimalExponentInteger";return}throw ne(b())},decimalExponentSign(){if(he.isDigit(j)){O+=b(),U="decimalExponentInteger";return}throw ne(b())},decimalExponentInteger(){if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},hexadecimal(){if(he.isHexDigit(j)){O+=b(),U="hexadecimalInteger";return}throw ne(b())},hexadecimalInteger(){if(he.isHexDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},string(){switch(j){case"\\":b(),O+=om();return;case'"':if(Fn)return b(),re("string",O);O+=b();return;case"'":if(!Fn)return b(),re("string",O);O+=b();return;case`
`:case"\r":throw ne(b());case"\u2028":case"\u2029":lm(j);break;case void 0:throw ne(b())}O+=b()},start(){switch(j){case"{":case"[":return re("punctuator",b())}U="value"},beforePropertyName(){switch(j){case"$":case"_":O=b(),U="identifierName";return;case"\\":b(),U="identifierNameStartEscape";return;case"}":return re("punctuator",b());case'"':case"'":Fn=b()==='"',U="string";return}if(he.isIdStartChar(j)){O+=b(),U="identifierName";return}throw ne(b())},afterPropertyName(){if(j===":")return re("punctuator",b());throw ne(b())},beforePropertyValue(){U="value"},afterPropertyValue(){switch(j){case",":case"}":return re("punctuator",b())}throw ne(b())},beforeArrayValue(){if(j==="]")return re("punctuator",b());U="value"},afterArrayValue(){switch(j){case",":case"]":return re("punctuator",b())}throw ne(b())},end(){throw ne(b())}};function re(e,t){return{type:e,value:t,line:lr,column:bt}}function vr(e){for(const t of e){if(Wt()!==t)throw ne(b());b()}}function om(){switch(Wt()){case"b":return b(),"\b";case"f":return b(),"\f";case"n":return b(),`
`;case"r":return b(),"\r";case"t":return b(),"	";case"v":return b(),"\v";case"0":if(b(),he.isDigit(Wt()))throw ne(b());return"\0";case"x":return b(),am();case"u":return b(),No();case`
`:case"\u2028":case"\u2029":return b(),"";case"\r":return b(),Wt()===`
`&&b(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ne(b());case void 0:throw ne(b())}return b()}function am(){let e="",t=Wt();if(!he.isHexDigit(t)||(e+=b(),t=Wt(),!he.isHexDigit(t)))throw ne(b());return e+=b(),String.fromCodePoint(parseInt(e,16))}function No(){let e="",t=4;for(;t-- >0;){const r=Wt();if(!he.isHexDigit(r))throw ne(b());e+=b()}return String.fromCodePoint(parseInt(e,16))}const um={start(){if(De.type==="eof")throw br();Vs()},beforePropertyName(){switch(De.type){case"identifier":case"string":wa=De.value,Ne="afterPropertyName";return;case"punctuator":bi();return;case"eof":throw br()}},afterPropertyName(){if(De.type==="eof")throw br();Ne="beforePropertyValue"},beforePropertyValue(){if(De.type==="eof")throw br();Vs()},beforeArrayValue(){if(De.type==="eof")throw br();if(De.type==="punctuator"&&De.value==="]"){bi();return}Vs()},afterPropertyValue(){if(De.type==="eof")throw br();switch(De.value){case",":Ne="beforePropertyName";return;case"}":bi()}},afterArrayValue(){if(De.type==="eof")throw br();switch(De.value){case",":Ne="beforeArrayValue";return;case"]":bi()}},end(){}};function Vs(){let e;switch(De.type){case"punctuator":switch(De.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=De.value;break}if(Ln===void 0)Ln=e;else{const t=Rt[Rt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,wa,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Rt.push(e),Array.isArray(e)?Ne="beforeArrayValue":Ne="beforePropertyName";else{const t=Rt[Rt.length-1];t==null?Ne="end":Array.isArray(t)?Ne="afterArrayValue":Ne="afterPropertyValue"}}function bi(){Rt.pop();const e=Rt[Rt.length-1];e==null?Ne="end":Array.isArray(e)?Ne="afterArrayValue":Ne="afterPropertyValue"}function ne(e){return Gi(e===void 0?`JSON5: invalid end of input at ${lr}:${bt}`:`JSON5: invalid character '${od(e)}' at ${lr}:${bt}`)}function br(){return Gi(`JSON5: invalid end of input at ${lr}:${bt}`)}function gu(){return bt-=5,Gi(`JSON5: invalid identifier character at ${lr}:${bt}`)}function lm(e){console.warn(`JSON5: '${od(e)}' in strings is not valid ECMAScript; consider escaping`)}function od(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Gi(e){const t=new SyntaxError(e);return t.lineNumber=lr,t.columnNumber=bt,t}var cm=function(t,r,n){const i=[];let s="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const w of r){let A;typeof w=="string"?A=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&(A=String(w)),A!==void 0&&o.indexOf(A)<0&&o.push(A)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,A){let D=A[w];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(w):typeof D.toJSON=="function"&&(D=D.toJSON(w))),a&&(D=a.call(A,w,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return d(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?v(D):m(D)}function d(w){const A={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let L=0;L<w.length;L++){const q=w[L];switch(q){case"'":case'"':A[q]++,S+=q;continue;case"\0":if(he.isDigit(w[L+1])){S+="\\x00";continue}}if(D[q]){S+=D[q];continue}if(q<" "){let xe=q.charCodeAt(0).toString(16);S+="\\x"+("00"+xe).substring(xe.length);continue}S+=q}const M=l||Object.keys(A).reduce((L,q)=>A[L]<A[q]?L:q);return S=S.replace(new RegExp(M,"g"),D[M]),M+S+M}function m(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let A=s;s=s+u;let D=o||Object.keys(w),S=[];for(const L of D){const q=c(L,w);if(q!==void 0){let xe=p(L)+":";u!==""&&(xe+=" "),xe+=q,S.push(xe)}}let M;if(S.length===0)M="{}";else{let L;if(u==="")L=S.join(","),M="{"+L+"}";else{let q=`,
`+s;L=S.join(q),M=`{
`+s+L+`,
`+A+"}"}}return i.pop(),s=A,M}function p(w){if(w.length===0)return d(w);const A=String.fromCodePoint(w.codePointAt(0));if(!he.isIdStartChar(A))return d(w);for(let D=A.length;D<w.length;D++)if(!he.isIdContinueChar(String.fromCodePoint(w.codePointAt(D))))return d(w);return w}function v(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let A=s;s=s+u;let D=[];for(let M=0;M<w.length;M++){const L=c(String(M),w);D.push(L!==void 0?L:"null")}let S;if(D.length===0)S="[]";else if(u==="")S="["+D.join(",")+"]";else{let M=`,
`+s,L=D.join(M);S=`[
`+s+L+`,
`+A+"]"}return i.pop(),s=A,S}};const dm={parse:im,stringify:cm};var fm=dm;function h(e){try{return fm.stringify(e)}catch{return String(e)}}const hm=[".",":",";",",","?","!"],mm=new RegExp(`[${hm.join("")}]+$`);function yu(e){return e.replace(mm,"")}function Re(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function ds(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&yu(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:yu(n)).join(": "):""}function qe(e){return e instanceof Error?e:new Error(Re(e))}function fs(e,t){const r=qe(e),n=ds(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var y;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(y||(y={}));var F;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(F||(F={}));F.ClientError,F.ServerError;y.Continue+"",F.Information,y.SwitchingProtocols+"",F.Information,y.Processing+"",F.Information,y.EarlyHints+"",F.Information,y.Ok+"",F.Success,y.Created+"",F.Success,y.Accepted+"",F.Success,y.NonAuthoritativeInformation+"",F.Success,y.NoContent+"",F.Success,y.ResetContent+"",F.Success,y.PartialContent+"",F.Success,y.MultiStatus+"",F.Success,y.AlreadyReported+"",F.Success,y.ImUsed+"",F.Success,y.MultipleChoices+"",F.Redirect,y.MovedPermanently+"",F.Redirect,y.Found+"",F.Redirect,y.SeeOther+"",F.Redirect,y.NotModified+"",F.Redirect,y.UseProxy+"",F.Redirect,y.Unused+"",F.Redirect,y.TemporaryRedirect+"",F.Redirect,y.PermanentRedirect+"",F.Redirect,y.BadRequest+"",F.ClientError,y.Unauthorized+"",F.ClientError,y.PaymentRequired+"",F.ClientError,y.Forbidden+"",F.ClientError,y.NotFound+"",F.ClientError,y.MethodNotAllowed+"",F.ClientError,y.NotAcceptable+"",F.ClientError,y.ProxyAuthenticationRequired+"",F.ClientError,y.RequestTimeout+"",F.ClientError,y.Conflict+"",F.ClientError,y.Gone+"",F.ClientError,y.LengthRequired+"",F.ClientError,y.PreconditionFailed+"",F.ClientError,y.PayloadTooLarge+"",F.ClientError,y.UriTooLong+"",F.ClientError,y.UnsupportedMediaType+"",F.ClientError,y.RangeNotSatisfiable+"",F.ClientError,y.ExpectationFailed+"",F.ClientError,y.ImATeapot+"",F.ClientError,y.MisdirectedRequest+"",F.ClientError,y.UnprocessableContent+"",F.ClientError,y.Locked+"",F.ClientError,y.FailedDependency+"",F.ClientError,y.TooEarly+"",F.ClientError,y.UpgradeRequired+"",F.ClientError,y.PreconditionRequired+"",F.ClientError,y.TooManyRequests+"",F.ClientError,y.RequestHeaderFieldsTooLarge+"",F.ClientError,y.UnavailableForLegalReasons+"",F.ClientError,y.InternalServerError+"",F.ServerError,y.NotImplemented+"",F.ServerError,y.BadGateway+"",F.ServerError,y.ServiceUnavailable+"",F.ServerError,y.GatewayTimeout+"",F.ServerError,y.HttpVersionNotSupported+"",F.ServerError,y.VariantAlsoNegotiates+"",F.ServerError,y.InsufficientStorage+"",F.ServerError,y.LoopDetected+"",F.ServerError,y.NotExtended+"",F.ServerError,y.NetworkAuthenticationRequired+"",F.ServerError;const Oi={[F.Information]:[y.Continue,y.SwitchingProtocols,y.Processing,y.EarlyHints],[F.Success]:[y.Ok,y.Created,y.Accepted,y.NonAuthoritativeInformation,y.NoContent,y.ResetContent,y.PartialContent,y.MultiStatus,y.AlreadyReported,y.ImUsed],[F.Redirect]:[y.MultipleChoices,y.MovedPermanently,y.Found,y.SeeOther,y.NotModified,y.UseProxy,y.Unused,y.TemporaryRedirect,y.PermanentRedirect],[F.ClientError]:[y.BadRequest,y.Unauthorized,y.PaymentRequired,y.Forbidden,y.NotFound,y.MethodNotAllowed,y.NotAcceptable,y.ProxyAuthenticationRequired,y.RequestTimeout,y.Conflict,y.Gone,y.LengthRequired,y.PreconditionFailed,y.PayloadTooLarge,y.UriTooLong,y.UnsupportedMediaType,y.RangeNotSatisfiable,y.ExpectationFailed,y.ImATeapot,y.MisdirectedRequest,y.UnprocessableContent,y.Locked,y.FailedDependency,y.TooEarly,y.UpgradeRequired,y.PreconditionRequired,y.TooManyRequests,y.RequestHeaderFieldsTooLarge,y.UnavailableForLegalReasons],[F.ServerError]:[y.InternalServerError,y.NotImplemented,y.BadGateway,y.ServiceUnavailable,y.GatewayTimeout,y.HttpVersionNotSupported,y.VariantAlsoNegotiates,y.InsufficientStorage,y.LoopDetected,y.NotExtended,y.NetworkAuthenticationRequired]};function ad({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class ud{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(qe(n))}})}}class Br extends Error{}class pm extends Br{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class gm extends Br{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class ym extends Br{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class zr extends Br{}class ld extends Br{constructor(t){super(`Invalid unit ${t}`)}}class Ce extends Br{}class Jt extends Br{constructor(){super("Zone is an abstract class")}}const x="numeric",Dt="short",et="long",Zi={year:x,month:x,day:x},cd={year:x,month:Dt,day:x},wm={year:x,month:Dt,day:x,weekday:Dt},dd={year:x,month:et,day:x},fd={year:x,month:et,day:x,weekday:et},hd={hour:x,minute:x},md={hour:x,minute:x,second:x},pd={hour:x,minute:x,second:x,timeZoneName:Dt},gd={hour:x,minute:x,second:x,timeZoneName:et},yd={hour:x,minute:x,hourCycle:"h23"},wd={hour:x,minute:x,second:x,hourCycle:"h23"},vd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Dt},bd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:et},Dd={year:x,month:x,day:x,hour:x,minute:x},Ed={year:x,month:x,day:x,hour:x,minute:x,second:x},Ad={year:x,month:Dt,day:x,hour:x,minute:x},Cd={year:x,month:Dt,day:x,hour:x,minute:x,second:x},vm={year:x,month:Dt,day:x,weekday:Dt,hour:x,minute:x},$d={year:x,month:et,day:x,hour:x,minute:x,timeZoneName:Dt},kd={year:x,month:et,day:x,hour:x,minute:x,second:x,timeZoneName:Dt},Sd={year:x,month:et,day:x,weekday:et,hour:x,minute:x,timeZoneName:et},xd={year:x,month:et,day:x,weekday:et,hour:x,minute:x,second:x,timeZoneName:et};class si{get type(){throw new Jt}get name(){throw new Jt}get ianaName(){return this.name}get isUniversal(){throw new Jt}offsetName(t,r){throw new Jt}formatOffset(t,r){throw new Jt}offset(t){throw new Jt}equals(t){throw new Jt}get isValid(){throw new Jt}}let Us=null;class hs extends si{static get instance(){return Us===null&&(Us=new hs),Us}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _d(t,r,n)}formatOffset(t,r){return On(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Mo=new Map;function bm(e){let t=Mo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Mo.set(e,t)),t}const Dm={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Em(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,u,l,c]=n;return[o,i,s,a,u,l,c]}function Am(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=Dm[s];s==="era"?n[a]=o:R(a)||(n[a]=parseInt(o,10))}return n}const Ws=new Map;class qt extends si{static create(t){let r=Ws.get(t);return r===void 0&&Ws.set(t,r=new qt(t)),r}static resetCache(){Ws.clear(),Mo.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=qt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _d(t,r,n,this.name)}formatOffset(t,r){return On(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=bm(this.name);let[i,s,o,a,u,l,c]=n.formatToParts?Am(n,r):Em(n,r);a==="BC"&&(i=-Math.abs(i)+1);const m=ps({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const v=p%1e3;return p-=v>=0?v:1e3+v,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let wu={};function Cm(e,t={}){const r=JSON.stringify([e,t]);let n=wu[r];return n||(n=new Intl.ListFormat(e,t),wu[r]=n),n}const Bo=new Map;function Po(e,t={}){const r=JSON.stringify([e,t]);let n=Bo.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Bo.set(r,n)),n}const Io=new Map;function $m(e,t={}){const r=JSON.stringify([e,t]);let n=Io.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Io.set(r,n)),n}const Ro=new Map;function km(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=Ro.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),Ro.set(i,s)),s}let Tn=null;function Sm(){return Tn||(Tn=new Intl.DateTimeFormat().resolvedOptions().locale,Tn)}const Lo=new Map;function Fd(e){let t=Lo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Lo.set(e,t)),t}const Oo=new Map;function xm(e){let t=Oo.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Td,...t}),Oo.set(e,t)}return t}function Fm(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=Po(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=Po(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function Tm(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Nm(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function Mm(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function Di(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function Bm(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Fd(e.locale).numberingSystem==="latn"}class Pm{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=$m(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Aa(t,3);return pe(r,this.padTo)}}}class Im{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&qt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Po(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Rm{constructor(t,r,n){this.opts={style:"long",...n},!r&&Ld()&&(this.rtf=km(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):ip(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Td={firstDay:1,minimalDays:4,weekend:[6,7]};class Q{static fromOpts(t){return Q.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||oe.defaultLocale,a=o||(s?"en-US":Sm()),u=r||oe.defaultNumberingSystem,l=n||oe.defaultOutputCalendar,c=Vo(i)||oe.defaultWeekSettings;return new Q(a,u,l,c,o)}static resetCache(){Tn=null,Bo.clear(),Io.clear(),Ro.clear(),Lo.clear(),Oo.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Q.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,u]=Fm(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=Tm(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Bm(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Q.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Vo(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Di(this,t,Wd,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Nm(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return Di(this,t,qd,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Mm(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Di(this,void 0,()=>Kd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Di(this,t,Gd,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new Pm(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Im(t,this.intl,r)}relFormatter(t={}){return new Rm(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Cm(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Fd(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Od()?xm(this.locale):Td}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let js=null;class Me extends si{static get utcInstance(){return js===null&&(js=new Me(0)),js}static instance(t){return t===0?Me.utcInstance:new Me(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Me(gs(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${On(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${On(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return On(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Lm extends si{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ir(e,t){if(R(e)||e===null)return t;if(e instanceof si)return e;if(jm(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?hs.instance:r==="utc"||r==="gmt"?Me.utcInstance:Me.parseSpecifier(r)||qt.create(e)}else return ar(e)?Me.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Lm(e)}const va={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},vu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Om=va.hanidec.replace(/[\[|\]]/g,"").split("");function _m(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(va.hanidec)!==-1)t+=Om.indexOf(e[r]);else for(const i in vu){const[s,o]=vu[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}const _o=new Map;function Vm(){_o.clear()}function ht({numberingSystem:e},t=""){const r=e||"latn";let n=_o.get(r);n===void 0&&(n=new Map,_o.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${va[r]}${t}`),n.set(t,i)),i}let bu=()=>Date.now(),Du="system",Eu=null,Au=null,Cu=null,$u=60,ku,Su=null;class oe{static get now(){return bu}static set now(t){bu=t}static set defaultZone(t){Du=t}static get defaultZone(){return ir(Du,hs.instance)}static get defaultLocale(){return Eu}static set defaultLocale(t){Eu=t}static get defaultNumberingSystem(){return Au}static set defaultNumberingSystem(t){Au=t}static get defaultOutputCalendar(){return Cu}static set defaultOutputCalendar(t){Cu=t}static get defaultWeekSettings(){return Su}static set defaultWeekSettings(t){Su=Vo(t)}static get twoDigitCutoffYear(){return $u}static set twoDigitCutoffYear(t){$u=t%100}static get throwOnInvalid(){return ku}static set throwOnInvalid(t){ku=t}static resetCaches(){Q.resetCache(),qt.resetCache(),I.resetCache(),Vm()}}class wt{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Nd=[0,31,59,90,120,151,181,212,243,273,304,334],Md=[0,31,60,91,121,152,182,213,244,274,305,335];function ut(e,t){return new wt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ba(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Bd(e,t,r){return r+(oi(e)?Md:Nd)[t-1]}function Pd(e,t){const r=oi(e)?Md:Nd,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function Da(e,t){return(e-t+7)%7+1}function Yi(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=Bd(n,i,s),a=Da(ba(n,i,s),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Kn(l,t,r)):u>Kn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...ys(e)}}function xu(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=Da(ba(n,1,t),r),a=Gr(n);let u=i*7+s-o-7+t,l;u<1?(l=n-1,u+=Gr(l)):u>a?(l=n+1,u-=Gr(n)):l=n;const{month:c,day:d}=Pd(l,u);return{year:l,month:c,day:d,...ys(e)}}function zs(e){const{year:t,month:r,day:n}=e,i=Bd(t,r,n);return{year:t,ordinal:i,...ys(e)}}function Fu(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Pd(t,r);return{year:t,month:n,day:i,...ys(e)}}function Tu(e,t){if(!R(e.localWeekday)||!R(e.localWeekNumber)||!R(e.localWeekYear)){if(!R(e.weekday)||!R(e.weekNumber)||!R(e.weekYear))throw new zr("Cannot mix locale-based week fields with ISO-based week fields");return R(e.localWeekday)||(e.weekday=e.localWeekday),R(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),R(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Um(e,t=4,r=1){const n=ms(e.weekYear),i=lt(e.weekNumber,1,Kn(e.weekYear,t,r)),s=lt(e.weekday,1,7);return n?i?s?!1:ut("weekday",e.weekday):ut("week",e.weekNumber):ut("weekYear",e.weekYear)}function Wm(e){const t=ms(e.year),r=lt(e.ordinal,1,Gr(e.year));return t?r?!1:ut("ordinal",e.ordinal):ut("year",e.year)}function Id(e){const t=ms(e.year),r=lt(e.month,1,12),n=lt(e.day,1,Hi(e.year,e.month));return t?r?n?!1:ut("day",e.day):ut("month",e.month):ut("year",e.year)}function Rd(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=lt(t,0,23)||t===24&&r===0&&n===0&&i===0,o=lt(r,0,59),a=lt(n,0,59),u=lt(i,0,999);return s?o?a?u?!1:ut("millisecond",i):ut("second",n):ut("minute",r):ut("hour",t)}function R(e){return typeof e>"u"}function ar(e){return typeof e=="number"}function ms(e){return typeof e=="number"&&e%1===0}function jm(e){return typeof e=="string"}function zm(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ld(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Od(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function qm(e){return Array.isArray(e)?e:[e]}function Nu(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Km(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function en(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Vo(e){if(e==null)return null;if(typeof e!="object")throw new Ce("Week settings must be an object");if(!lt(e.firstDay,1,7)||!lt(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!lt(t,1,7)))throw new Ce("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function lt(e,t,r){return ms(e)&&e>=t&&e<=r}function Gm(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function tr(e){if(!(R(e)||e===null||e===""))return parseInt(e,10)}function Dr(e){if(!(R(e)||e===null||e===""))return parseFloat(e)}function Ea(e){if(!(R(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Aa(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function oi(e){return e%4===0&&(e%100!==0||e%400===0)}function Gr(e){return oi(e)?366:365}function Hi(e,t){const r=Gm(t-1,12)+1,n=e+(t-r)/12;return r===2?oi(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ps(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Mu(e,t,r){return-Da(ba(e,1,t),r)+t-1}function Kn(e,t=4,r=1){const n=Mu(e,t,r),i=Mu(e+1,t,r);return(Gr(e)-n+i)/7}function Uo(e){return e>99?e:e>oe.twoDigitCutoffYear?1900+e:2e3+e}function _d(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function gs(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Vd(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ce(`Invalid unit value ${e}`);return t}function Ji(e,t){const r={};for(const n in e)if(en(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Vd(i)}return r}function On(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${pe(r,2)}:${pe(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${pe(r,2)}${pe(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ys(e){return Km(e,["hour","minute","second","millisecond"])}const Zm=["January","February","March","April","May","June","July","August","September","October","November","December"],Ud=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ym=["J","F","M","A","M","J","J","A","S","O","N","D"];function Wd(e){switch(e){case"narrow":return[...Ym];case"short":return[...Ud];case"long":return[...Zm];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const jd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],zd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Hm=["M","T","W","T","F","S","S"];function qd(e){switch(e){case"narrow":return[...Hm];case"short":return[...zd];case"long":return[...jd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Kd=["AM","PM"],Jm=["Before Christ","Anno Domini"],Qm=["BC","AD"],Xm=["B","A"];function Gd(e){switch(e){case"narrow":return[...Xm];case"short":return[...Qm];case"long":return[...Jm];default:return null}}function ep(e){return Kd[e.hour<12?0:1]}function tp(e,t){return qd(t)[e.weekday-1]}function rp(e,t){return Wd(t)[e.month-1]}function np(e,t){return Gd(t)[e.year<0?0:1]}function ip(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function Bu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const sp={D:Zi,DD:cd,DDD:dd,DDDD:fd,t:hd,tt:md,ttt:pd,tttt:gd,T:yd,TT:wd,TTT:vd,TTTT:bd,f:Dd,ff:Ad,fff:$d,ffff:Sd,F:Ed,FF:Cd,FFF:kd,FFFF:xd};class ke{static create(t,r={}){return new ke(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return sp[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return pe(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,v)=>this.loc.extract(t,p,v),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?ep(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,v)=>n?rp(t,p):s(v?{month:p}:{month:p,day:"numeric"},"month"),l=(p,v)=>n?tp(t,p):s(v?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const v=ke.macroTokenToFormatOpts(p);return v?this.formatWithSystemDefault(t,v):p},d=p=>n?np(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return Bu(ke.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},s=ke.parseFormat(r),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return Bu(s,i(a))}}const Zd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function gn(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function yn(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,u]=s(t,i);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function wn(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Yd(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=tr(t[r+i]);return[n,null,r+i]}}const Hd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,op=`(?:${Hd.source}?(?:\\[(${Zd.source})\\])?)?`,Ca=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Jd=RegExp(`${Ca.source}${op}`),$a=RegExp(`(?:T${Jd.source})?`),ap=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,up=/(\d{4})-?W(\d\d)(?:-?(\d))?/,lp=/(\d{4})-?(\d{3})/,cp=Yd("weekYear","weekNumber","weekDay"),dp=Yd("year","ordinal"),fp=/(\d{4})-(\d\d)-(\d\d)/,Qd=RegExp(`${Ca.source} ?(?:${Hd.source}|(${Zd.source}))?`),hp=RegExp(`(?: ${Qd.source})?`);function Zr(e,t,r){const n=e[t];return R(n)?r:tr(n)}function mp(e,t){return[{year:Zr(e,t),month:Zr(e,t+1,1),day:Zr(e,t+2,1)},null,t+3]}function vn(e,t){return[{hours:Zr(e,t,0),minutes:Zr(e,t+1,0),seconds:Zr(e,t+2,0),milliseconds:Ea(e[t+3])},null,t+4]}function ai(e,t){const r=!e[t]&&!e[t+1],n=gs(e[t+1],e[t+2]),i=r?null:Me.instance(n);return[{},i,t+3]}function ui(e,t){const r=e[t]?qt.create(e[t]):null;return[{},r,t+1]}const pp=RegExp(`^T?${Ca.source}$`),gp=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function yp(e){const[t,r,n,i,s,o,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(p,v=!1)=>p!==void 0&&(v||p&&c)?-p:p;return[{years:m(Dr(r)),months:m(Dr(n)),weeks:m(Dr(i)),days:m(Dr(s)),hours:m(Dr(o)),minutes:m(Dr(a)),seconds:m(Dr(u),u==="-0"),milliseconds:m(Ea(l),d)}]}const wp={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ka(e,t,r,n,i,s,o){const a={year:t.length===2?Uo(tr(t)):tr(t),month:Ud.indexOf(r)+1,day:tr(n),hour:tr(i),minute:tr(s)};return o&&(a.second=tr(o)),e&&(a.weekday=e.length>3?jd.indexOf(e)+1:zd.indexOf(e)+1),a}const vp=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function bp(e){const[,t,r,n,i,s,o,a,u,l,c,d]=e,m=ka(t,i,n,r,s,o,a);let p;return u?p=wp[u]:l?p=0:p=gs(c,d),[m,new Me(p)]}function Dp(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Ep=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ap=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Cp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Pu(e){const[,t,r,n,i,s,o,a]=e;return[ka(t,i,n,r,s,o,a),Me.utcInstance]}function $p(e){const[,t,r,n,i,s,o,a]=e;return[ka(t,a,r,n,i,s,o),Me.utcInstance]}const kp=gn(ap,$a),Sp=gn(up,$a),xp=gn(lp,$a),Fp=gn(Jd),Xd=yn(mp,vn,ai,ui),Tp=yn(cp,vn,ai,ui),Np=yn(dp,vn,ai,ui),Mp=yn(vn,ai,ui);function Bp(e){return wn(e,[kp,Xd],[Sp,Tp],[xp,Np],[Fp,Mp])}function Pp(e){return wn(Dp(e),[vp,bp])}function Ip(e){return wn(e,[Ep,Pu],[Ap,Pu],[Cp,$p])}function Rp(e){return wn(e,[gp,yp])}const Lp=yn(vn);function Op(e){return wn(e,[pp,Lp])}const _p=gn(fp,hp),Vp=gn(Qd),Up=yn(vn,ai,ui);function Wp(e){return wn(e,[_p,Xd],[Vp,Up])}const Iu="Invalid Duration",ef={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},jp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...ef},st=146097/400,Pr=146097/4800,zp={years:{quarters:4,months:12,weeks:st/7,days:st,hours:st*24,minutes:st*24*60,seconds:st*24*60*60,milliseconds:st*24*60*60*1e3},quarters:{months:3,weeks:st/28,days:st/4,hours:st*24/4,minutes:st*24*60/4,seconds:st*24*60*60/4,milliseconds:st*24*60*60*1e3/4},months:{weeks:Pr/7,days:Pr,hours:Pr*24,minutes:Pr*24*60,seconds:Pr*24*60*60,milliseconds:Pr*24*60*60*1e3},...ef},xr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],qp=xr.slice(0).reverse();function Qt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new z(n)}function tf(e,t){let r=t.milliseconds??0;for(const n of qp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Ru(e,t){const r=tf(e,t)<0?-1:1;xr.reduceRight((n,i)=>{if(R(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),xr.reduce((n,i)=>{if(R(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function Kp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class z{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?zp:jp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Q.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return z.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ce(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new z({values:Ji(t,z.normalizeUnit),loc:Q.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(ar(t))return z.fromMillis(t);if(z.isDuration(t))return t;if(typeof t=="object")return z.fromObject(t);throw new Ce(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Rp(t);return n?z.fromObject(n,r):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Op(t);return n?z.fromObject(n,r):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the Duration is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new ym(n);return new z({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new ld(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ke.create(this.loc,n).formatDurationFromString(this,t):Iu}toHuman(t={}){if(!this.isValid)return Iu;const r=xr.map(n=>{const i=this.values[n];return R(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Aa(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?tf(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t),n={};for(const i of xr)(en(r.values,i)||en(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Qt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Vd(t(this.values[n],n));return Qt(this,{values:r},!0)}get(t){return this[z.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Ji(t,z.normalizeUnit)};return Qt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Qt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Ru(this.matrix,t),Qt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Kp(this.normalize().shiftToAll().toObject());return Qt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>z.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of xr)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;ar(i[o])&&(a+=i[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else ar(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return Ru(this.matrix,r),Qt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Qt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of xr)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ir="Invalid Interval";function Gp(e,t){return!e||!e.isValid?ce.invalid("missing or invalid start"):!t||!t.isValid?ce.invalid("missing or invalid end"):t<e?ce.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ce{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the Interval is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new gm(n);return new ce({invalid:n})}static fromDateTimes(t,r){const n=En(t),i=En(r),s=Gp(n,i);return s??new ce({start:n,end:i})}static after(t,r){const n=z.fromDurationLike(r),i=En(t);return ce.fromDateTimes(i,i.plus(n))}static before(t,r){const n=z.fromDurationLike(r),i=En(t);return ce.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=I.fromISO(n,r),o=s.isValid}catch{o=!1}let a,u;try{a=I.fromISO(i,r),u=a.isValid}catch{u=!1}if(o&&u)return ce.fromDateTimes(s,a);if(o){const l=z.fromISO(i,r);if(l.isValid)return ce.after(s,l)}else if(u){const l=z.fromISO(n,r);if(l.isValid)return ce.before(a,l)}}return ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ce.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(En).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(ce.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=z.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(ce.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ce.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ce.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(ce.fromDateTimes(r,u.time)),r=null);return ce.merge(i)}difference(...t){return ce.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Zi,r={}){return this.isValid?ke.create(this.s.loc.clone(r),t).formatInterval(this):Ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):z.invalid(this.invalidReason)}mapEndpoints(t){return ce.fromDateTimes(t(this.s),t(this.e))}}class Ei{static hasDST(t=oe.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return qt.isValidZone(t)}static normalizeZone(t){return ir(t,oe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Q.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Q.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Q.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Q.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Q.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Q.create(r,null,"gregory").eras(t)}static features(){return{relative:Ld(),localeWeek:Od()}}}function Lu(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(z.fromMillis(n).as("days"))}function Zp(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Lu(u,l);return(c-c%7)/7}],["days",Lu]],i={},s=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Yp(e,t,r,n){let[i,s,o,a]=Zp(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=z.fromObject(s,n);return l.length>0?z.fromMillis(u,n).shiftTo(...l).plus(c):c}const Hp="missing Intl.DateTimeFormat.formatToParts support";function Y(e,t=r=>r){return{regex:e,deser:([r])=>t(_m(r))}}const Jp=" ",rf=`[ ${Jp}]`,nf=new RegExp(rf,"g");function Qp(e){return e.replace(/\./g,"\\.?").replace(nf,rf)}function Ou(e){return e.replace(/\./g,"").replace(nf," ").toLowerCase()}function mt(e,t){return e===null?null:{regex:RegExp(e.map(Qp).join("|")),deser:([r])=>e.findIndex(n=>Ou(r)===Ou(n))+t}}function _u(e,t){return{regex:e,deser:([,r,n])=>gs(r,n),groups:t}}function Ai(e){return{regex:e,deser:([t])=>t}}function Xp(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function eg(e,t){const r=ht(t),n=ht(t,"{2}"),i=ht(t,"{3}"),s=ht(t,"{4}"),o=ht(t,"{6}"),a=ht(t,"{1,2}"),u=ht(t,"{1,3}"),l=ht(t,"{1,6}"),c=ht(t,"{1,9}"),d=ht(t,"{2,4}"),m=ht(t,"{4,6}"),p=A=>({regex:RegExp(Xp(A.val)),deser:([D])=>D,literal:!0}),w=(A=>{if(e.literal)return p(A);switch(A.val){case"G":return mt(t.eras("short"),0);case"GG":return mt(t.eras("long"),0);case"y":return Y(l);case"yy":return Y(d,Uo);case"yyyy":return Y(s);case"yyyyy":return Y(m);case"yyyyyy":return Y(o);case"M":return Y(a);case"MM":return Y(n);case"MMM":return mt(t.months("short",!0),1);case"MMMM":return mt(t.months("long",!0),1);case"L":return Y(a);case"LL":return Y(n);case"LLL":return mt(t.months("short",!1),1);case"LLLL":return mt(t.months("long",!1),1);case"d":return Y(a);case"dd":return Y(n);case"o":return Y(u);case"ooo":return Y(i);case"HH":return Y(n);case"H":return Y(a);case"hh":return Y(n);case"h":return Y(a);case"mm":return Y(n);case"m":return Y(a);case"q":return Y(a);case"qq":return Y(n);case"s":return Y(a);case"ss":return Y(n);case"S":return Y(u);case"SSS":return Y(i);case"u":return Ai(c);case"uu":return Ai(a);case"uuu":return Y(r);case"a":return mt(t.meridiems(),0);case"kkkk":return Y(s);case"kk":return Y(d,Uo);case"W":return Y(a);case"WW":return Y(n);case"E":case"c":return Y(r);case"EEE":return mt(t.weekdays("short",!1),1);case"EEEE":return mt(t.weekdays("long",!1),1);case"ccc":return mt(t.weekdays("short",!0),1);case"cccc":return mt(t.weekdays("long",!0),1);case"Z":case"ZZ":return _u(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return _u(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return Ai(/[a-z_+-/]{1,256}?/i);case" ":return Ai(/[^\S\n\r]/);default:return p(A)}})(e)||{invalidReason:Hp};return w.token=e,w}const tg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function rg(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=tg[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function ng(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function ig(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(en(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+u))),s+=u}return[n,i]}else return[n,{}]}function sg(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return R(e.z)||(r=qt.create(e.z)),R(e.Z)||(r||(r=new Me(e.Z)),n=e.Z),R(e.q)||(e.M=(e.q-1)*3+1),R(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),R(e.u)||(e.S=Ea(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let qs=null;function og(){return qs||(qs=I.fromMillis(1555555555555)),qs}function ag(e,t){if(e.literal)return e;const r=ke.macroTokenToFormatOpts(e.val),n=uf(r,t);return n==null||n.includes(void 0)?e:n}function sf(e,t){return Array.prototype.concat(...e.map(r=>ag(r,t)))}class of{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=sf(ke.parseFormat(r),t),this.units=this.tokens.map(n=>eg(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=ng(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=ig(t,this.regex,this.handlers),[i,s,o]=n?sg(n):[null,null,void 0];if(en(n,"a")&&en(n,"H"))throw new zr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function af(e,t,r){return new of(e,r).explainFromTokens(t)}function ug(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=af(e,t,r);return[n,i,s,o]}function uf(e,t){if(!e)return null;const n=ke.create(t,e).dtFormatter(og()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>rg(o,e,s))}const Ks="Invalid DateTime",Vu=864e13;function Nn(e){return new wt("unsupported zone",`the zone "${e.name}" is not supported`)}function Gs(e){return e.weekData===null&&(e.weekData=Yi(e.c)),e.weekData}function Zs(e){return e.localWeekData===null&&(e.localWeekData=Yi(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Er(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function lf(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Ci(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function _i(e,t,r){return lf(ps(e),t,r)}function Uu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,Hi(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=z.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ps(s);let[u,l]=lf(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Rr(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=I.fromObject(e,{...r,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return I.invalid(new wt("unparsable",`the input "${i}" can't be parsed as ${n}`))}function $i(e,t,r=!0){return e.isValid?ke.create(Q.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Ys(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=pe(e.c.year,r?6:4),t?(n+="-",n+=pe(e.c.month),n+="-",n+=pe(e.c.day)):(n+=pe(e.c.month),n+=pe(e.c.day)),n}function Wu(e,t,r,n,i,s){let o=pe(e.c.hour);return t?(o+=":",o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=pe(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=pe(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=pe(Math.trunc(-e.o/60)),o+=":",o+=pe(Math.trunc(-e.o%60))):(o+="+",o+=pe(Math.trunc(e.o/60)),o+=":",o+=pe(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const cf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},lg={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},cg={ordinal:1,hour:0,minute:0,second:0,millisecond:0},df=["year","month","day","hour","minute","second","millisecond"],dg=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],fg=["year","ordinal","hour","minute","second","millisecond"];function hg(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new ld(e);return t}function ju(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return hg(e)}}function mg(e){if(Mn===void 0&&(Mn=oe.now()),e.type!=="iana")return e.offset(Mn);const t=e.name;let r=Wo.get(t);return r===void 0&&(r=e.offset(Mn),Wo.set(t,r)),r}function zu(e,t){const r=ir(t.zone,oe.defaultZone);if(!r.isValid)return I.invalid(Nn(r));const n=Q.fromObject(t);let i,s;if(R(e.year))i=oe.now();else{for(const u of df)R(e[u])&&(e[u]=cf[u]);const o=Id(e)||Rd(e);if(o)return I.invalid(o);const a=mg(r);[i,s]=_i(e,a,r)}return new I({ts:i,zone:r,loc:n,o:s})}function qu(e,t,r){const n=R(r.round)?!0:r.round,i=(o,a)=>(o=Aa(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function Ku(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Mn;const Wo=new Map;class I{constructor(t){const r=t.zone||oe.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new wt("invalid input"):null)||(r.isValid?null:Nn(r));this.ts=R(t.ts)?oe.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=ar(t.o)&&!t.old?t.o:r.offset(this.ts);i=Ci(this.ts,a),n=Number.isNaN(i.year)?new wt("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||Q.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=Ku(arguments),[n,i,s,o,a,u,l]=r;return zu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Ku(arguments),[n,i,s,o,a,u,l]=r;return t.zone=Me.utcInstance,zu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=zm(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const i=ir(r.zone,oe.defaultZone);return i.isValid?new I({ts:n,zone:i,loc:Q.fromObject(r)}):I.invalid(Nn(i))}static fromMillis(t,r={}){if(ar(t))return t<-Vu||t>Vu?I.invalid("Timestamp out of range"):new I({ts:t,zone:ir(r.zone,oe.defaultZone),loc:Q.fromObject(r)});throw new Ce(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(ar(t))return new I({ts:t*1e3,zone:ir(r.zone,oe.defaultZone),loc:Q.fromObject(r)});throw new Ce("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=ir(r.zone,oe.defaultZone);if(!n.isValid)return I.invalid(Nn(n));const i=Q.fromObject(r),s=Ji(t,ju),{minDaysInFirstWeek:o,startOfWeek:a}=Tu(s,i),u=oe.now(),l=R(r.specificOffset)?n.offset(u):r.specificOffset,c=!R(s.ordinal),d=!R(s.year),m=!R(s.month)||!R(s.day),p=d||m,v=s.weekYear||s.weekNumber;if((p||c)&&v)throw new zr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new zr("Can't mix ordinal dates with month/day");const w=v||s.weekday&&!p;let A,D,S=Ci(u,l);w?(A=dg,D=lg,S=Yi(S,o,a)):c?(A=fg,D=cg,S=zs(S)):(A=df,D=cf);let M=!1;for(const Et of A){const Ft=s[Et];R(Ft)?M?s[Et]=D[Et]:s[Et]=S[Et]:M=!0}const L=w?Um(s,o,a):c?Wm(s):Id(s),q=L||Rd(s);if(q)return I.invalid(q);const xe=w?xu(s,o,a):c?Fu(s):s,[ft,Oe]=_i(xe,l,n),Ze=new I({ts:ft,zone:n,o:Oe,loc:i});return s.weekday&&p&&t.weekday!==Ze.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Ze.toISO()}`):Ze.isValid?Ze:I.invalid(Ze.invalid)}static fromISO(t,r={}){const[n,i]=Bp(t);return Rr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=Pp(t);return Rr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Ip(t);return Rr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(R(t)||R(r))throw new Ce("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=Q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=ug(o,t,r);return c?I.invalid(c):Rr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=Wp(t);return Rr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the DateTime is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new pm(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=uf(t,Q.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return sf(ke.parseFormat(t),Q.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Mn=void 0,Wo.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Gs(this).weekYear:NaN}get weekNumber(){return this.isValid?Gs(this).weekNumber:NaN}get weekday(){return this.isValid?Gs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Zs(this).weekday:NaN}get localWeekNumber(){return this.isValid?Zs(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Zs(this).weekYear:NaN}get ordinal(){return this.isValid?zs(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ei.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ei.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ei.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ei.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ps(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=Ci(u,o),d=Ci(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Er(this,{ts:u}),Er(this,{ts:l})]:[this]}get isInLeapYear(){return oi(this.year)}get daysInMonth(){return Hi(this.year,this.month)}get daysInYear(){return this.isValid?Gr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Kn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Kn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=ke.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Me.instance(t),r)}toLocal(){return this.setZone(oe.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=ir(t,oe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=_i(o,s,t)}return Er(this,{ts:i,zone:t})}else return I.invalid(Nn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Er(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Ji(t,ju),{minDaysInFirstWeek:n,startOfWeek:i}=Tu(r,this.loc),s=!R(r.weekYear)||!R(r.weekNumber)||!R(r.weekday),o=!R(r.ordinal),a=!R(r.year),u=!R(r.month)||!R(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new zr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new zr("Can't mix ordinal dates with month/day");let d;s?d=xu({...Yi(this.c,n,i),...r},n,i):R(r.ordinal)?(d={...this.toObject(),...r},R(r.day)&&(d.day=Math.min(Hi(d.year,d.month),d.day))):d=Fu({...zs(this.c),...r});const[m,p]=_i(d,this.o,this.zone);return Er(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t);return Er(this,Uu(this,r))}minus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t).negate();return Er(this,Uu(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=z.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ke.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Ks}toLocaleString(t=Zi,r={}){return this.isValid?ke.create(this.loc.clone(r),t).formatDateTime(this):Ks}toLocaleParts(t={}){return this.isValid?ke.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Ys(this,o);return a+="T",a+=Wu(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Ys(this,t==="extended"):null}toISOWeekDate(){return $i(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Wu(this,o==="extended",r,t,n,s):null}toRFC2822(){return $i(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return $i(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ys(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),$i(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ks}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return z.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=qm(r).map(z.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Yp(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ce.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),qu(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?qu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new Ce("min requires all arguments be DateTimes");return Nu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new Ce("max requires all arguments be DateTimes");return Nu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=Q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return af(o,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=Q.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new of(s,t)}static fromFormatParser(t,r,n={}){if(R(t)||R(r))throw new Ce("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,o=Q.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(r.locale))throw new Ce(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?I.invalid(c):Rr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Zi}static get DATE_MED(){return cd}static get DATE_MED_WITH_WEEKDAY(){return wm}static get DATE_FULL(){return dd}static get DATE_HUGE(){return fd}static get TIME_SIMPLE(){return hd}static get TIME_WITH_SECONDS(){return md}static get TIME_WITH_SHORT_OFFSET(){return pd}static get TIME_WITH_LONG_OFFSET(){return gd}static get TIME_24_SIMPLE(){return yd}static get TIME_24_WITH_SECONDS(){return wd}static get TIME_24_WITH_SHORT_OFFSET(){return vd}static get TIME_24_WITH_LONG_OFFSET(){return bd}static get DATETIME_SHORT(){return Dd}static get DATETIME_SHORT_WITH_SECONDS(){return Ed}static get DATETIME_MED(){return Ad}static get DATETIME_MED_WITH_SECONDS(){return Cd}static get DATETIME_MED_WITH_WEEKDAY(){return vm}static get DATETIME_FULL(){return $d}static get DATETIME_FULL_WITH_SECONDS(){return kd}static get DATETIME_HUGE(){return Sd}static get DATETIME_HUGE_WITH_SECONDS(){return xd}}function En(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&ar(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new Ce(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";const ff=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];B.Milliseconds+"",B.Seconds+"",B.Minutes+"",B.Hours+"",B.Days+"",B.Weeks+"",B.Months+"",B.Quarters+"",B.Years+"";function pg(e){return ff.filter(t=>e[t])}function jo(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function gg(e){return jo(Math.max(e-.4,0),{roundToDigits:0})}function Gu(e){return e===0?0:Math.sign(e)}function tn(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=z.fromObject(e).as(B.Milliseconds);const u=pg(t).reverse(),l=Gu(a);u.forEach((p,v)=>{const w=v===u.length-1;if(s&&o||s)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===B.Milliseconds)n.milliseconds=jo(a,i);else{const A=z.fromObject({milliseconds:a}).as(p),D=Math.sign(A),S=Math.abs(A),M=w?jo(S,i):Math.floor(i.roundToDigits==null?S:gg(S)),L=M===0?0:M*D;n[p]=L,a-=z.fromObject({[p]:L}).as(B.Milliseconds),l!==Gu(a)&&(a=0)}});let c=!1;const d=[],m=ff.toReversed().filter(p=>n[p]?(c=!0,!0):c?(d.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(w=>p[w]=!0);const v=tn(e,p,i);return d.forEach(w=>v[w]=0),v}return n}var N;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(N||(N={}));N.Year,N.Hour,N.Minute,N.Second,N.Millisecond;N.Quarter,N.Month,N.Week,N.Day;N.Millisecond,N.Second,N.Minute,N.Hour,N.Day,N.Week,N.Month,N.Quarter,N.Year;var $e;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})($e||($e={}));$e.Sunday+"",$e.Monday+"",$e.Tuesday+"",$e.Wednesday+"",$e.Thursday+"",$e.Friday+"",$e.Saturday+"";$e.Sunday,$e.Monday,$e.Tuesday,$e.Wednesday,$e.Thursday,$e.Friday,$e.Saturday;var Ue;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ue||(Ue={}));Ue.January,Ue.February,Ue.March,Ue.April,Ue.May,Ue.June,Ue.July,Ue.August,Ue.September,Ue.October,Ue.November,Ue.December;const Zu={min:1,max:12},Yu={min:1,max:31},Hu={min:0,max:23},Ju={min:0,max:59},Qu={min:0,max:59},Xu={min:0,max:999};function Gn(e){const t=new ud,r=tn(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}var yg=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Kt;(function(e){e.Node="node",e.Web="web"})(Kt||(Kt={}));function wg(){return yg?Kt.Node:Kt.Web}const hf=wg();function vg(e){return hf===e}function mf(e){return e[hf]()}class f extends Error{name="AssertionError";constructor(t,r){super(ds(r,t)||"Assertion failed.")}}const el={interval:{milliseconds:100},timeout:{seconds:10}},Hs=Symbol("not set");async function bg(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:o}=Dg(t),a=tn(o.timeout,{milliseconds:!0}).milliseconds,u=tn(o.interval,{milliseconds:!0});let l=Hs,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(p){l=Hs,c=qe(p)}}const m=Date.now();for(;l===Hs;)if(await d(),await Gn(u),Date.now()-m>=a){const v=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw fs(c,v)}return l}function $(e,t=!1){return(...r)=>bg(e,r,t)}function Dg(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:pf(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function pf(e){return{interval:e?.interval||el.interval,timeout:e?.timeout||el.timeout}}const An={isFalse(e,t){if(e!==!1)throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${h(e)}' is not truthy.`,t)}},gf={assert:An,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:$(An.isFalse),isFalsy:$(An.isFalsy),isTrue:$(An.isTrue),isTruthy:$(An.isTruthy)}};function Eg(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r)}function Ag(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r)}function Cg(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r)}function $g(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r)}const Cn={endsWith:Eg,endsWithout:Ag,startsWith:Cg,startsWithout:$g},yf={assert:Cn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:$(Cn.endsWith),endsWithout:$(Cn.endsWithout),startsWith:$(Cn.startsWith),startsWithout:$(Cn.startsWithout)}};function kg(e,t,r){const n=gt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Pt(e,t){return gt(t).includes(e)}const Js={isEnumValue(e,t,r){kg(e,t,r)},isNotEnumValue(e,t,r){const n=gt(t);if(n.includes(e))throw new f(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},wf={assert:Js,check:{isEnumValue:Pt,isNotEnumValue(e,t){return!gt(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=gt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=gt(t);if(n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(gt(t).includes(e))return e},isNotEnumValue(e,t){if(!gt(t).includes(e))return e}},waitUntil:{isEnumValue:$(Js.isEnumValue),isNotEnumValue:$(Js.isNotEnumValue)}},Qs={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new f("Entries are equal.",r)}},vf={assert:Qs,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],s=t[n];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],s=t[n];return i!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new f("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:$(Qs.entriesEqual),notEntriesEqual:$(Qs.notEntriesEqual)}};function Qi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zn(e,t){if(!(e===t||Qi(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Qi(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Zn(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Re(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Bn(e,t){if(e===t||Qi(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Qi(r,n)?!1:Object.keys(e).every(s=>Bn(e[s],t[s]))}return!1}const Xs={jsonEquals(e,t,r){try{Zn(e,t)}catch(n){throw new f(Re(n),r)}},notJsonEquals(e,t,r){try{Zn(e,t)}catch{return}throw new f("Values are JSON equal.",r)}},bf={assert:Xs,check:{jsonEquals(e,t){return Bn(e,t)},notJsonEquals(e,t){return!Bn(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Zn(e,t),e}catch(n){throw new f(Re(n),r)}},notJsonEquals(e,t,r){try{Zn(e,t)}catch{return e}throw new f("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Bn(e,t))return e},notJsonEquals(e,t){if(!Bn(e,t))return e}},waitUntil:{jsonEquals:$(Xs.jsonEquals),notJsonEquals:$(Xs.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function tl(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Df(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Df.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Ef=typeof WeakMap=="function"?WeakMap:Df;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function rl(e,t,r){if(!r||rn(e)||rn(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function ki(e,t,r,n){if(!(!r||rn(e)||rn(t))){var i=r.get(e);i?i.set(t,n):(i=new Ef,i.set(t,n),r.set(e,i))}}function pt(e,t,r){if(r&&r.comparator)return nl(e,t,r);var n=Af(e,t);return n!==null?n:nl(e,t,r)}function Af(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:rn(e)||rn(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function nl(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Ef;var n=r&&r.comparator,i=rl(e,t,r.memoize);if(i!==null)return i;var s=rl(t,e,r.memoize);if(s!==null)return s;if(n){var o=n(e,t);if(o===!1||o===!0)return ki(e,t,r.memoize,o),o;var a=Af(e,t);if(a!==null)return a}var u=tl(e);if(u!==tl(t))return ki(e,t,r.memoize,!1),!1;ki(e,t,r.memoize,!0);var l=Sg(e,t,u,r);return ki(e,t,r.memoize,l),l}function Sg(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return pt(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Cf(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Tr(e,t,n);case"RegExp":return xg(e,t);case"Generator":return Fg(e,t,n);case"DataView":return Tr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Tr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return il(e,t,n);case"Map":return il(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Ng(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function xg(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function il(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),Tr(n.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Tr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(pt(e[i],t[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Fg(e,t,r){return Tr(zo(e),zo(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Tg(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function sl(e){if(Tg(e))try{return zo(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function zo(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function ol(e){var t=[];for(var r in e)t.push(r);return t}function al(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Cf(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(pt(e[r[s]],t[r[s]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ng(e,t,r){var n=ol(e),i=ol(t),s=al(e),o=al(t);if(n=n.concat(s),i=i.concat(o),n.length&&n.length===i.length)return Tr(ul(n).sort(),ul(i).sort())===!1?!1:Cf(e,t,n,r);var a=sl(e),u=sl(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Tr(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function rn(e){return e===null||typeof e!="object"}function ul(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}function rr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const er={strictEquals(e,t,r){if(e!==t)throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r)}},$f=er.deepEquals,kf={assert:er,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return pt(e,t,{comparator:rr})},notDeepEquals(e,t){return!pt(e,t,{comparator:rr})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(pt(e,t,{comparator:rr}))return e;throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(pt(e,t,{comparator:rr}))return e},notDeepEquals(e,t){if(!pt(e,t,{comparator:rr}))return e}},waitUntil:{strictEquals:$(er.strictEquals),notStrictEquals:$(er.notStrictEquals),looseEquals:$(er.looseEquals),notLooseEquals:$(er.notLooseEquals),deepEquals:$(er.deepEquals),notDeepEquals:$(er.notDeepEquals)}};function He(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function ot(e,t){return typeof t=="string"?t.includes(e):He(t,e)}const Nt={hasValue(e,t,r){if(!He(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(He(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!ot(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(ot(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is not empty.`,t)}}},Sf={assert:Nt,check:{hasValue(e,t){return He(e,t)},lacksValue(e,t){return!He(e,t)},hasValues(e,t){return t.every(r=>He(e,r))},lacksValues(e,t){return t.every(r=>!He(e,r))},isIn(e,t){return ot(e,t)},isNotIn(e,t){return!ot(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!He(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(He(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!ot(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(ot(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(He(e,t))return e},lacksValue(e,t){if(!He(e,t))return e},hasValues(e,t){if(t.every(r=>He(e,r)))return e},lacksValues(e,t){if(!t.every(r=>He(e,r)))return e},isIn(e,t){if(ot(e,t))return e},isNotIn(e,t){if(!ot(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:$(Nt.hasValue),lacksValue:$(Nt.lacksValue),hasValues:$(Nt.hasValues),lacksValues:$(Nt.lacksValues),isIn:$(Nt.isIn),isNotIn:$(Nt.isNotIn),isEmpty:$(Nt.isEmpty),isNotEmpty:$(Nt.isNotEmpty)}},eo={isHttpStatus(e,t){if(!Pt(e,y))throw new f(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Pt(e,y)){if(!ot(e,Oi[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r)}},xf={assert:eo,check:{isHttpStatus(e){return Pt(e,y)},isHttpStatusCategory(e,t){return Pt(e,y)&&ot(e,Oi[t])}},assertWrap:{isHttpStatus(e,t){if(!Pt(e,y))throw new f(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Pt(e,y)){if(!ot(e,Oi[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Pt(e,y))return e},isHttpStatusCategory(e,t){if(Pt(e,y)&&ot(e,Oi[t]))return e}},waitUntil:{isHttpStatus:$(eo.isHttpStatus),isHttpStatusCategory:$(eo.isHttpStatusCategory)}},to={instanceOf(e,t,r){if(!(e instanceof t))throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r)}},Ff={assert:to,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:$(to.instanceOf),notInstanceOf:$(to.notInstanceOf)}},Mg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function se(e,t){return Mg.some(r=>{try{return r(e,t)}catch{return!1}})}const Ar={isKeyOf(e,t,r){if(!se(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(se(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!se(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(se(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!se(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>se(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},Tf={assert:Ar,check:{isKeyOf(e,t){return se(t,e)},isNotKeyOf(e,t){return!se(t,e)},hasKey:se,lacksKey(e,t){return!se(e,t)},hasKeys(e,t){return t.every(r=>se(e,r))},lacksKeys(e,t){return t.every(r=>!se(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!se(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(se(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!se(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(se(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!se(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>se(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(se(t,e))return e},isNotKeyOf(e,t){if(!se(t,e))return e},hasKey(e,t){if(se(e,t))return e},lacksKey(e,t){if(!se(e,t))return e},hasKeys(e,t){if(t.every(r=>se(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!se(e,r)))return e}},waitUntil:{isKeyOf:$(Ar.isKeyOf),isNotKeyOf:$(Ar.isNotKeyOf),hasKey:$(Ar.hasKey),lacksKey:$(Ar.lacksKey),hasKeys:$(Ar.hasKeys),lacksKeys:$(Ar.lacksKeys)}};function Bg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r)}function Pg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r)}const ro={isLengthAtLeast:Bg,isLengthExactly:Pg},Nf={assert:ro,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:X(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:X(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)===t)return e}},waitUntil:{isLengthAtLeast:$(ro.isLengthAtLeast),isLengthExactly:$(ro.isLengthExactly)}},Ig={never(e){throw new f("This code should not have executed.",e)}},Mf={assert:Ig,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},no={isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${h(e)}' is not a nullish.`,t)}},Bf={assert:no,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:$(no.isDefined),isNullish:$(no.isNullish)}},_e={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n)}},Pf={assert:_e,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:$(_e.isInBounds),isOutBounds:$(_e.isOutBounds),isInteger:$(_e.isInteger),isNotInteger:$(_e.isNotInteger),isAbove:$(_e.isAbove),isAtLeast:$(_e.isAtLeast),isBelow:$(_e.isBelow),isAtMost:$(_e.isAtMost),isNaN:$(_e.isNaN),isFinite:$(_e.isFinite),isInfinite:$(_e.isInfinite),isApproximately:$(_e.isApproximately),isNotApproximately:$(_e.isNotApproximately)}};function Rg(e,t,r,n,i){return li(...ws(e,t,r,n,i),!1)}function ws(e,t,r,n,i){const s=Array.isArray(r);return[s?e:$f,s?t:e,s?r:t,s?n:r,s?i:n]}function li(e,t,r,n,i,s){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),s?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Re(l)}`,i))}});try{return e(o,n),s?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Re(a)}`,i)}}function Lg(e,t,r,n,i){try{const s=li(...ws(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Og(e,t,r,n,i){return li(...ws(e,t,r,n,i),!0)}function _g(e,t,r,n,i){try{const s=li(...ws(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const io=Symbol("not set");async function Vg(e,t,r,n,i,s){const o=Array.isArray(r),a=o?e:$f,u=o?t:e,l=o?r:t,c=o?n:r,d=pf(o?i:n),m=o?s:i,p=tn(d.timeout,{milliseconds:!0}).milliseconds,v=tn(d.interval,{milliseconds:!0});let w=io,A;async function D(){try{w=await li(a,u,l,c,void 0,!0)}catch(M){w=io,A=qe(M)}}const S=Date.now();for(;w===io;)if(await D(),await Gn(v),Date.now()-S>=p)throw fs(A,ds(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return w}const Ug={output:Rg},If={assert:Ug,check:{output:Lg},assertWrap:{output:Og},checkWrap:{output:_g},waitUntil:{output:Vg}},$n={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t)}},Rf={assert:$n,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:$($n.isNotPrimitive),isNotPropertyKey:$($n.isNotPropertyKey),isPrimitive:$($n.isPrimitive),isPropertyKey:$($n.isPropertyKey)}},kn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t)}},Lf={assert:kn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:$(kn.isPromiseLike,!0),isNotPromiseLike:$(kn.isNotPromiseLike,!0),isPromise:$(kn.isPromise,!0),isNotPromise:$(kn.isNotPromise,!0)}},so={matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r)}},Of={assert:so,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:$(so.matches,!0),mismatches:$(so.mismatches,!0)}},de={isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t)}},_f={assert:de,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:$(de.isArray),isBigInt:$(de.isBigInt),isBoolean:$(de.isBoolean),isFunction:$(de.isFunction),isNull:$(de.isNull),isNumber:$(de.isNumber),isObject:$(de.isObject),isString:$(de.isString),isSymbol:$(de.isSymbol),isUndefined:$(de.isUndefined),isNotArray:$(de.isNotArray),isNotBigInt:$(de.isNotBigInt),isNotBoolean:$(de.isNotBoolean),isNotFunction:$(de.isNotFunction),isNotNull:$(de.isNotNull),isNotNumber:$(de.isNotNumber),isNotObject:$(de.isNotObject),isNotString:$(de.isNotString),isNotSymbol:$(de.isNotSymbol),isNotUndefined:$(de.isNotUndefined)}};var je;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(je||(je={}));function Sa(e,t,r){xa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function ll(e,t,r){xa(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function xa(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new f(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=Re(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new f(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new f(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new f(t.notInstance,n);else throw new f(t.noError,n)}function cl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Re(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function vs(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=qe(u)}try{ll(i,r,n),e===je.Assert?o():e===je.Check?o(!0):o(i)}catch(u){e===je.CheckWrap?o(void 0):e===je.Check?o(!1):a(qe(u))}})}catch(s){i=qe(s)}try{return ll(i,r,n),e===je.Check?!0:e!==je.Assert?i:void 0}catch(s){if(e===je.CheckWrap)return;if(e===je.Check)return!1;throw s}}function Wg(e,t,r){return vs(je.Assert,e,t,r)}function jg(e,t){return vs(je.Check,e,t)}function zg(e,t,r){return vs(je.AssertWrap,e,t,r)}function qg(e,t,r){return vs(je.CheckWrap,e,t,r)}const Kg=$(Sa);function Gg(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${h(s)}'`);return Kg(i,async()=>{try{await s();return}catch(u){return qe(u)}},a,o)}const Zg={throws:Wg,isError:Sa},Vf={assert:Zg,check:{throws:jg,isError(e,t){return cl(e,t)}},assertWrap:{throws:zg,isError(e,t,r){return xa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:qg,isError(e,t){if(cl(e,t))return e}},waitUntil:{throws:Gg,isError:$(Sa)}},nr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,oo={isUuid(e,t){if(!String(e).match(nr))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(nr))throw new f(`'${String(e)}' is a UUID.`,t)}},Uf={assert:oo,check:{isUuid(e){return!!String(e).match(nr)},isNotUuid(e){return!String(e).match(nr)}},assertWrap:{isUuid(e,t){if(!String(e).match(nr))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(nr))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(nr))return e},isNotUuid(e){if(!String(e).match(nr))return e}},waitUntil:{isUuid:$(oo.isUuid),isNotUuid:$(oo.isNotUuid)}},Yg={...Mf.assert,...gf.assert,...yf.assert,...vf.assert,...wf.assert,...xf.assert,...Ff.assert,...bf.assert,...Tf.assert,...Nf.assert,...Bf.assert,...Pf.assert,...If.assert,...Rf.assert,...Lf.assert,...Of.assert,..._f.assert,...kf.assert,...Vf.assert,...Uf.assert,...Sf.assert},Fa=[gf,yf,vf,wf,xf,Ff,bf,Tf,Nf,Mf,Bf,Pf,If,Rf,Lf,Of,_f,kf,Vf,Uf,Sf],Hg=Object.assign({},...Fa.map(e=>e.check)),E=Object.assign(function(t){return!!t},Hg);function Jg(e,t,r){return Vi(e,t,r,new Set)}function Vi(e,t,r,n){if(e=dl(e),t=dl(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Vi(X(e).sort(),X(t).sort(),r,n))return!1;let i=!1;const s=X(e).map(o=>{const a=Vi(e[o],t[o],r,n);return E.isPromise(a)&&(i=!0),a});return fl(i,s)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Vi(o,t[a],r,n);return E.isPromise(u)&&(i=!0),u});return fl(i,s)}else return r(e,t)}function dl(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function fl(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(E.isTrue))}catch(i){n(qe(i))}}):t.every(E.isTrue)}const Qg=Object.assign({},...Fa.map(e=>e.assertWrap)),nn=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r);return t},Qg);function Xg(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const e1={tsType:Xg},t1={assert:e1},r1={fail:e=>{throw new f("Failure triggered.",e)}},n1={...t1.assert,...Yg,...r1},pr=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r)},n1),i1=Object.assign({},...Fa.map(e=>e.checkWrap)),s1=Object.assign(function(t){if(t)return t},i1);function o1(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function Lr(e,t){return e.controlType===t}var Z=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(Z||{});const Wf=Symbol("any-type"),a1={checkbox:!1,color:"",dropdown:"",hidden:Wf,number:0,text:""};function u1(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=a1[i.controlType];s!==Wf&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function l1(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return E.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(n,a),s(a)}catch(a){o(qe(a))}}):(e.set(n,i),i)}}function ci(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(qe(o))}}):(e[t]=n,n)}}function Ta(e){return X(e).map(t=>[t,e[t]])}function qo(e){return Object.fromEntries(e)}function di(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function c1(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}function d1({min:e,max:t}){const{min:r,max:n}=ad({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return r+l%i}const hl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function jf(e=16){let t="";for(let r=0;r<e;r++){const n=d1({min:0,max:hl.length-1});t+=hl[n]}return t}function zf(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Re(t).trim()).join(`
`))}function f1(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const h1="modulepreload",m1=function(e){return"/element-vir/vira/"+e},ml={},qf=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let o=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");i=o(r.map(l=>{if(l=m1(l),l in ml)return;ml[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":h1,c||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),c)return new Promise((p,v)=>{m.addEventListener("load",p),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var ve;(function(e){e.Standard="stdout",e.Error="stderr"})(ve||(ve={}));var W;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(W||(W={}));async function p1(){return await mf({async[Kt.Node](){const e=(await qf(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[W.Bold]:e.bold.open,[W.Debug]:e.blueBright.open,[W.Error]:e.red.open,[W.Faint]:e.gray.open,[W.Info]:e.cyan.open,[W.Mutate]:e.magenta.open,[W.NormalWeight]:"\x1B[22m",[W.Plain]:"",[W.Reset]:e.reset.open,[W.Success]:e.green.open,[W.Warning]:e.yellow.open}},[Kt.Web](){return Promise.resolve({[W.Bold]:"font-weight: bold",[W.Debug]:"color: blue",[W.Error]:"color: red",[W.Faint]:"color: grey",[W.Info]:"color: teal",[W.Mutate]:"color: magenta",[W.NormalWeight]:"",[W.Plain]:"",[W.Reset]:"",[W.Success]:"color: green",[W.Warning]:"color: orange"})}})}const Ye=await p1(),g1={[W.Bold]:{colors:[Ye.bold],logType:ve.Standard},[W.Debug]:{colors:[Ye.debug],logType:ve.Standard},[W.Faint]:{colors:[Ye.faint],logType:ve.Standard},[W.Info]:{colors:[Ye.info],logType:ve.Standard},[W.Mutate]:{colors:[Ye.mutate,Ye.bold],logType:ve.Standard},[W.NormalWeight]:{colors:[Ye.normalWeight],logType:ve.Standard},[W.Plain]:{colors:[],logType:ve.Standard},[W.Reset]:{colors:[Ye.reset],logType:ve.Standard},[W.Success]:{colors:[Ye.success,Ye.bold],logType:ve.Standard},[W.Error]:{colors:[Ye.error,Ye.bold],logType:ve.Error},[W.Warning]:{colors:[Ye.warning],logType:ve.Error}},y1="px";function Kf(e){return w1({value:e,suffix:y1})}function w1({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function v1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function b1(){return await mf({async[Kt.Node](){const{inspect:e}=await qf(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[W.Reset].colors.join("")].join(""),css:void 0}}},[Kt.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:di(r.colorConfig[t].colors,o=>v1({value:o,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:o instanceof Error?Re(o):h(o)).join(`
`),r.omitColors?"":r.colorConfig[W.Reset].colors.join("")].join(""),css:n}}}})}const D1=await b1();function tt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Yr({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function E1(e,t){try{let r=!1;const n=Ta(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(E.isTruthy);return r?new Promise(async(i,s)=>{try{const o=di(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);i(qo(o))}catch(o){s(qe(o))}}):qo(n)}catch(r){throw qe(r)}}function A1(e,t){return E1(e,(r,n)=>{const i=n,s=t(n,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function Gf(e,...t){const r={...e};return t.forEach(n=>{n&&Ta(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}const C1={colorConfig:g1,omitColors:!1},$1=Zf({[ve.Error](){},[ve.Standard](){}});function Zf(e,t){const r=Gf(C1,t);function n(s){e[r.colorConfig[s.colorKey].logType](D1({...s,options:r}))}const i=A1(W,s=>(...o)=>n({args:o,colorKey:s}));return{...i,if(s){return s?i:$1}}}const k1=vg(Kt.Node)?{[ve.Error]({text:e}){process.stderr.write(e+`
`)},[ve.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ve.Error]({text:e,css:t}){console.error(tt({value:e,prefix:"%c"}),t)},[ve.Standard]({text:e,css:t}){console.log(tt({value:e,prefix:"%c"}),t)}},S1=Zf(k1);function Yf(...e){const t=e.join(""),r=c1(Array.from(t));return Array.from(r).join("")}function x1(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Hf(e,t){const r=Yf([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return F1(e,r)}function F1(e,t){const r=Yf(t);return typeof e=="string"?new RegExp(x1(e),r):new RegExp(e.source,r)}function Jf(e,{caseSensitive:t}){return Hf(e,"")}function T1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Hf(Jf(t,{caseSensitive:r}),"g"),s=[];return e.replace(i,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),s}function N1(e,t,{caseSensitive:r}){const n=T1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=Jf(t,{caseSensitive:r});return e.split(i).reduce((o,a,u)=>{const l=n[u],c=o.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function M1(e,t){return e.split(t)}function pl(e,t){const{min:r,max:n}=ad(t);if(t.takeOverflow){const i=n-r+1,s=(e-r)%i;return s<0?r+i+s:r+s}else return e>n?r:e<r?n:e}function Le(e,t){let r=!1;const n=X(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),i[s]=o,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(X(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(qe(o))}}):n}function bs(e,t){const r=Ta(e).filter(([n,i])=>t(n,i,e));return qo(r)}function B1(e,t){return bs(e,r=>!t.includes(r))}function P1(e,t){return bs(e,r=>t.includes(r))}function Ko(e){return X(e).map(t=>e[t])}function I1(e,t){return t.capitalizeFirstLetter?R1(e):e}function R1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const L1={capitalizeFirstLetter:!1};var sn;(function(e){e.Upper="upper",e.Lower="lower"})(sn||(sn={}));function O1(e){return e.toLowerCase()!==e.toUpperCase()}function gl(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(O1(n)){if(t===sn.Upper&&n!==n.toUpperCase()||t===sn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function _1(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return I1(n,Gf(L1,t))}function V1(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=gl(o,sn.Lower,{rejectNoCaseCharacters:!0})||gl(a,sn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function U1(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function Qf(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function gr(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Xf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class W1{listeners={};universalListeners=new Map;getListenerCount(){return Ko(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(s,o){r.once&&n(),t(s,o)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=E.isString(t)?t:t.type,s=()=>this.listeners[i]?.delete(r)||!1;function o(a,u){n.once&&s(),r(a,u)}return ci(this.listeners,i,()=>new Map).set(r,{listener:o,removeListener:s}),s}removeListener(t,r){const n=E.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Ko(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Na extends W1{}function eh(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function yl(e,t,r){return eh(globalThis,e,t,r)}function Ma(e,t){return Xi(e.title),e.parent?[...Ma(e.parent),Xi(e.parent.title)].concat([]):[]}function Xi(e){return Qf(e).toLowerCase().replaceAll(/\s/g,"-")}function j1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const z1={[Se.ElementExample]:()=>[],[Se.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...u1(e.controls,e.title)].filter(E.isTruthy),[Se.Root]:()=>[]},es="_isBookTreeNode",th=new Map;function q1(e){return th.get(e)}function K1(e,t){l1(th,e,()=>t)}function Hr(e,t){return!!(rh(e)&&e.entry.entryType===t)}function rh(e){return!!(E.hasKeys(e,[es,"entry"])&&e[es])}function G1(){return{[es]:!0,entry:{entryType:Se.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Z1({entries:e,debug:t}){const r=q1(e);if(r)return r;const n=G1();e.forEach(o=>Ba({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const i=nh(n),s={tree:n,flattenedNodes:i};return K1(e,s),t&&console.info("element-book tree:",n),s}function Y1(e,t,r){if(!t.parent)return e;const n=Go(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ba({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Go(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Ma(t).join(" > ")}`);return i}function Ba({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=z1[t.entryType](t);t.errors.push(...i);const s=Y1(e,t,r),o=Xi(t.title),a=s.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[es]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};s.children[o]=u,o1(t,Se.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Ba({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Go(e,t){const r=rh(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ma(e);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function nh(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>nh(i));return[e,...r].flat()}function Pa(e,t){return Ia(e,["",...t],void 0)}function Ia(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],o=s&&Ia(s,n,r);return{...e.controls,...o}}function H1(e,t,r){const n={...e};return Ia(n,["",...t],r),n}function ih(e,t){const r=t?.controls||(Hr(e,Se.Page)?Le(e.entry.controls,(i,s)=>s.initValue):{});return{children:Le(e.children,(i,s)=>ih(s,t?.children?.[s.urlBreadcrumb])),controls:r}}function Ae(e){const t={...e,entryType:Se.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,entryType:Se.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[Xi(i.title)]=i}}),t}var yt=(e=>(e.Search="search",e.Book="book",e))(yt||{});function Zo(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const on={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis,Ra=Ui.ShadowRoot&&(Ui.ShadyCSS===void 0||Ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,La=Symbol(),wl=new WeakMap;let sh=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==La)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ra&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=wl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&wl.set(r,t))}return t}toString(){return this.cssText}};const me=e=>new sh(typeof e=="string"?e:e+"",void 0,La),Wi=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new sh(r,e,La)},J1=(e,t)=>{if(Ra)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Ui.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},vl=Ra?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return me(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Q1,defineProperty:X1,getOwnPropertyDescriptor:ey,getOwnPropertyNames:ty,getOwnPropertySymbols:ry,getPrototypeOf:ny}=Object,Ds=globalThis,bl=Ds.trustedTypes,iy=bl?bl.emptyScript:"",sy=Ds.reactiveElementPolyfillSupport,_n=(e,t)=>e,ts={toAttribute(e,t){switch(t){case Boolean:e=e?iy:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Oa=(e,t)=>!Q1(e,t),Dl={attribute:!0,type:String,converter:ts,reflect:!1,useDefault:!1,hasChanged:Oa};Symbol.metadata??=Symbol("metadata"),Ds.litPropertyMetadata??=new WeakMap;let jr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Dl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&X1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=ey(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dl}static _$Ei(){if(this.hasOwnProperty(_n("elementProperties")))return;const t=ny(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_n("properties"))){const r=this.properties,n=[...ty(r),...ry(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(vl(i))}else t!==void 0&&r.push(vl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return J1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:ts).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ts;this._$Em=i,this[i]=o.fromAttribute(r,s.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const i=this.constructor,s=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??Oa)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};jr.elementStyles=[],jr.shadowRootOptions={mode:"open"},jr[_n("elementProperties")]=new Map,jr[_n("finalized")]=new Map,sy?.({ReactiveElement:jr}),(Ds.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=globalThis,rs=_a.trustedTypes,El=rs?rs.createPolicy("lit-html",{createHTML:e=>e}):void 0,oh="$lit$",sr=`lit$${Math.random().toFixed(9).slice(2)}$`,ah="?"+sr,oy=`<${ah}>`,Mr=document,Yn=()=>Mr.createComment(""),Hn=e=>e===null||typeof e!="object"&&typeof e!="function",Va=Array.isArray,ay=e=>Va(e)||typeof e?.[Symbol.iterator]=="function",ao=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Al=/-->/g,Cl=/>/g,Cr=RegExp(`>|${ao}(?:([^\\s"'>=/]+)(${ao}*=${ao}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$l=/'/g,kl=/"/g,uh=/^(?:script|style|textarea|title)$/i,uy=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ly=uy(1),rt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Sl=new WeakMap,Fr=Mr.createTreeWalker(Mr,129);function lh(e,t){if(!Va(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return El!==void 0?El.createHTML(t):t}const cy=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Sn;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===Sn?c[1]==="!--"?o=Al:c[1]!==void 0?o=Cl:c[2]!==void 0?(uh.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=Cr):c[3]!==void 0&&(o=Cr):o===Cr?c[0]===">"?(o=i??Sn,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?Cr:c[3]==='"'?kl:$l):o===kl||o===$l?o=Cr:o===Al||o===Cl?o=Sn:(o=Cr,i=void 0);const p=o===Cr&&e[a+1].startsWith("/>")?" ":"";s+=o===Sn?u+oy:d>=0?(n.push(l),u.slice(0,d)+oh+u.slice(d)+sr+p):u+sr+(d===-2?a:p)}return[lh(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Jn{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=cy(t,r);if(this.el=Jn.createElement(l,n),Fr.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Fr.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(oh)){const m=c[o++],p=i.getAttribute(d).split(sr),v=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:v[2],strings:p,ctor:v[1]==="."?fy:v[1]==="?"?hy:v[1]==="@"?my:Es}),i.removeAttribute(d)}else d.startsWith(sr)&&(u.push({type:6,index:s}),i.removeAttribute(d));if(uh.test(i.tagName)){const d=i.textContent.split(sr),m=d.length-1;if(m>0){i.textContent=rs?rs.emptyScript:"";for(let p=0;p<m;p++)i.append(d[p],Yn()),Fr.nextNode(),u.push({type:2,index:++s});i.append(d[m],Yn())}}}else if(i.nodeType===8)if(i.data===ah)u.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(sr,d+1))!==-1;)u.push({type:7,index:s}),d+=sr.length-1}s++}}static createElement(t,r){const n=Mr.createElement("template");return n.innerHTML=t,n}}function an(e,t,r=e,n){if(t===rt)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=Hn(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=an(e,i._$AS(e,t.values),i,n)),t}let dy=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Mr).importNode(r,!0);Fr.currentNode=i;let s=Fr.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new bn(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new py(s,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=Fr.nextNode(),o++)}return Fr.currentNode=Mr,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class bn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=an(this,t,r),Hn(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ay(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&Hn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Mr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Jn.createElement(lh(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new dy(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=Sl.get(t.strings);return r===void 0&&Sl.set(t.strings,r=new Jn(t)),r}k(t){Va(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new bn(this.O(Yn()),this.O(Yn()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=an(this,t,r,0),o=!Hn(t)||t!==this._$AH&&t!==rt,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=an(this,a[n+u],r,u),l===rt&&(l=this._$AH[u]),o||=!Hn(l)||l!==this._$AH[u],l===K?t=K:t!==K&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fy extends Es{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class hy extends Es{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class my extends Es{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=an(this,t,r,0)??K)===rt)return;const n=this._$AH,i=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==K&&(n===K||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class py{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){an(this,t)}}const gy={I:bn},yy=_a.litHtmlPolyfillSupport;yy?.(Jn,bn),(_a.litHtmlVersions??=[]).push("3.3.0");const wy=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new bn(t.insertBefore(Yn(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=globalThis;let Vn=class extends jr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wy(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}};Vn._$litElement$=!0,Vn.finalized=!0,Ua.litElementHydrateSupport?.({LitElement:Vn});const vy=Ua.litElementPolyfillSupport;vy?.({LitElement:Vn});(Ua.litElementVersions??=[]).push("4.2.0");function yr(e){if(E.isObject(e))return Le(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(V1(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?me(r):r.startsWith("-")?Wi`-${me(r)}`:Wi`--${me(r)}`;return{name:o,value:Wi`var(${o}, ${me(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${yr.name}' function.`)}function by({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const H=yr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Dy={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function Ey(e,t){ch(e,t,Dy)}function Yo(e){return E.hasKey(e,"_$cssResult$")}function xl(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&Yo(e.name)&&Yo(e.value)}function ch(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Yo(i)){if(!xl(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);by({forCssVar:s,onElement:e,toValue:String(i)})}else{if(xl(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ch(e,i,s)}})}function ue(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(s=s[0]),n===1?s.map(o=>o[0]):s}function fi(e){return ur(e)==="string"}function ur(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ns(e,{precision:t,unit:r}){return cr(e)?"none":dh(e,t)+(r??"")}function cr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ge(e){return cr(e)?0:e}function dh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const Ay={deg:1,grad:.9,rad:180/Math.PI,turn:360};function fh(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let d=l[0],m=c.slice(0,-d.length);d==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*Ay[d]),c.type="<angle>",c.unit=d)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),o.push(c)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function hh(e){return e[e.length-1]}function Qn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function mh(e,t,r){return(r-e)/(t-e)}function Wa(e,t,r){return Qn(t[0],t[1],mh(e[0],e[1],r))}function ph(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function gh(e,t,r){return Math.max(Math.min(r,t),e)}function As(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Ct(e,t){return As(Math.abs(e)**t,e)}function ja(e,t){return t===0?0:e/t}function yh(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var Cy=Object.freeze({__proto__:null,bisectLeft:yh,clamp:gh,copySign:As,interpolate:Qn,interpolateInv:mh,isNone:cr,isString:fi,last:hh,mapRange:Wa,multiplyMatrices:ue,parseCoordGrammar:ph,parseFunction:fh,serializeNumber:ns,skipNone:ge,spow:Ct,toPrecision:dh,type:ur,zdiv:ja});class $y{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const dr=new $y;var nt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Be={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ho(e){return Array.isArray(e)?e:Be[e]}function is(e,t,r,n={}){if(e=Ho(e),t=Ho(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(dr.run("chromatic-adaptation-start",i),i.M||(i.W1===Be.D65&&i.W2===Be.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Be.D50&&i.W2===Be.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),dr.run("chromatic-adaptation-end",i),i.M)return ue(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const ky=new Set(["<number>","<percentage>","<angle>"]);function Fl(e,t,r,n){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,d;if(l.none?d=u.find(v=>ky.has(v)):d=u.find(v=>v==c),!d){let v=o.name||s;throw new TypeError(`${c??l.raw} not allowed for ${v} in ${r}()`)}let m=d.range;c==="<percentage>"&&(m||=[0,1]);let p=o.range||o.refRange;return m&&p&&(n[a]=Wa(m,p,n[a])),d})}function wh(e,{meta:t}={}){let r={str:String(e)?.trim()};if(dr.run("parse-start",r),r.color)return r.color;if(r.parsed=fh(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of T.all){let d=c.getFormat("color");if(d&&(o.includes(d.id)||d.ids?.filter(m=>o.includes(m)).length)){const m=Object.keys(c.coords).map((v,w)=>r.parsed.args[w]||0);let p;return d.coordGrammar&&(p=Fl(c,d,"color",m)),t&&Object.assign(t,{formatId:"color",types:p}),d.id.startsWith("--")&&!i.startsWith("--")&&nt.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${i}).`),i.startsWith("--")&&!d.id.startsWith("--")&&nt.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:m,alpha:a}}}let u="",l=i in T.registry?i:s;if(l in T.registry){let c=T.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of T.all){let s=i.getFormat(n);if(s&&s.type==="function"){let o=1;(s.lastAlpha||hh(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return s.coordGrammar&&(u=Fl(i,s,n,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let n of T.all)for(let i in n.formats){let s=n.formats[i];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let o=s.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function V(e){if(Array.isArray(e))return e.map(V);if(!e)throw new TypeError("Empty color reference");fi(e)&&(e=wh(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}const Sy=75e-6;class T{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ho(n),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:xy(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),dr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Sy}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Tl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Tl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=V(t);[t,r]=[a.space,a.coords]}if(t=T.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,s,o;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)s=n[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=V(t);[t,r]=[n.space,n.coords]}return t=T.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof T)return t;if(ur(t)==="string"){let i=T.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return T.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=ur(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=T.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ur(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=T.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function xy(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Tl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=ph(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(s=Wa(a,u,s)),s=ns(s,{precision:i,unit:l}),s})}return e}var Ee=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ke extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ee),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=ue(t.toXYZ_M,r);return this.white!==this.base.white&&(n=is(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=is(this.base.white,this.white,r),ue(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function hi(e,t){return e=V(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}function Qe(e,t){e=V(e);let{space:r,index:n}=T.resolveCoord(t,e.space);return hi(e,r)[n]}function za(e,t,r){return e=V(e),t=T.get(t),e.coords=t.to(e.space,r),e}za.returns="color";function Gt(e,t,r){if(e=V(e),arguments.length===2&&ur(arguments[1])==="object"){let n=arguments[1];for(let i in n)Gt(e,i,n[i])}else{typeof r=="function"&&(r=r(Qe(e,t)));let{space:n,index:i}=T.resolveCoord(t,e.space),s=hi(e,n);s[i]=r,za(e,n,s)}return e}Gt.returns="color";var qa=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ee,fromBase:e=>is(Ee.white,"D50",e),toBase:e=>is("D50",Ee.white,e)});const Fy=216/24389,Nl=24/116,Si=24389/27;let uo=Be.D50;var Xe=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:uo,base:qa,fromBase(e){let r=e.map((n,i)=>n/uo[i]).map(n=>n>Fy?Math.cbrt(n):(Si*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Nl?Math.pow(t[0],3):(116*t[0]-16)/Si,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Si,t[2]>Nl?Math.pow(t[2],3):(116*t[2]-16)/Si].map((n,i)=>n*uo[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function St(e){return(e%360+360)%360}function Ty(e,t){if(e==="raw")return t;let[r,n]=t.map(St),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var Xn=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xe,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Ml=25**7,ss=Math.PI,Bl=180/ss,Or=ss/180;function Pl(e){const t=e*e;return t*t*t*e}function vh(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=V([e,t]);let[s,o,a]=Xe.from(e),u=Xn.from(Xe,[s,o,a])[1],[l,c,d]=Xe.from(t),m=Xn.from(Xe,[l,c,d])[1];u<0&&(u=0),m<0&&(m=0);let p=(u+m)/2,v=Pl(p),w=.5*(1-Math.sqrt(v/(v+Ml))),A=(1+w)*o,D=(1+w)*c,S=Math.sqrt(A**2+a**2),M=Math.sqrt(D**2+d**2),L=A===0&&a===0?0:Math.atan2(a,A),q=D===0&&d===0?0:Math.atan2(d,D);L<0&&(L+=2*ss),q<0&&(q+=2*ss),L*=Bl,q*=Bl;let xe=l-s,ft=M-S,Oe=q-L,Ze=L+q,Et=Math.abs(Oe),Ft;S*M===0?Ft=0:Et<=180?Ft=Oe:Oe>180?Ft=Oe-360:Oe<-180?Ft=Oe+360:nt.warn("the unthinkable has happened");let wi=2*Math.sqrt(M*S)*Math.sin(Ft*Or/2),Y0=(s+l)/2,Os=(S+M)/2,fu=Pl(Os),Tt;S*M===0?Tt=Ze:Et<=180?Tt=Ze/2:Ze<360?Tt=(Ze+360)/2:Tt=(Ze-360)/2;let hu=(Y0-50)**2,H0=1+.015*hu/Math.sqrt(20+hu),mu=1+.045*Os,Dn=1;Dn-=.17*Math.cos((Tt-30)*Or),Dn+=.24*Math.cos(2*Tt*Or),Dn+=.32*Math.cos((3*Tt+6)*Or),Dn-=.2*Math.cos((4*Tt-63)*Or);let pu=1+.015*Os*Dn,J0=30*Math.exp(-1*((Tt-275)/25)**2),Q0=2*Math.sqrt(fu/(fu+Ml)),X0=-1*Math.sin(2*J0*Or)*Q0,vi=(xe/(r*H0))**2;return vi+=(ft/(n*mu))**2,vi+=(wi/(i*pu))**2,vi+=X0*(ft/(n*mu))*(wi/(i*pu)),Math.sqrt(vi)}const Ny=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],My=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],By=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Py=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var un=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ee,fromBase(e){let r=ue(Ny,e).map(n=>Math.cbrt(n));return ue(By,r)},toBase(e){let r=ue(Py,e).map(n=>n**3);return ue(My,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Jo(e,t){[e,t]=V([e,t]);let[r,n,i]=un.from(e),[s,o,a]=un.from(t),u=r-s,l=n-o,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const Iy=75e-6;function Nr(e,t,{epsilon:r=Iy}={}){e=V(e),t||(t=e.space),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ln(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function bh(e,t,r="lab"){r=T.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function Ry(e,t){return bh(e,t,"lab")}const Ly=Math.PI,Il=Ly/180;function Oy(e,t,{l:r=2,c:n=1}={}){[e,t]=V([e,t]);let[i,s,o]=Xe.from(e),[,a,u]=Xn.from(Xe,[i,s,o]),[l,c,d]=Xe.from(t),m=Xn.from(Xe,[l,c,d])[1];a<0&&(a=0),m<0&&(m=0);let p=i-l,v=a-m,w=s-c,A=o-d,D=w**2+A**2-v**2,S=.511;i>=16&&(S=.040975*i/(1+.01765*i));let M=.0638*a/(1+.0131*a)+.638,L;Number.isNaN(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*Il)):L=.36+Math.abs(.4*Math.cos((u+35)*Il));let q=Math.pow(a,4),xe=Math.sqrt(q/(q+1900)),ft=M*(xe*L+1-xe),Oe=(p/(r*S))**2;return Oe+=(v/(n*M))**2,Oe+=D/ft**2,Math.sqrt(Oe)}const Rl=203;var Ka=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ee,fromBase(e){return e.map(t=>Math.max(t*Rl,0))},toBase(e){return e.map(t=>Math.max(t/Rl,0))}});const xi=1.15,Fi=.66,Ll=2610/2**14,_y=2**14/2610,Ol=3424/2**12,_l=2413/2**7,Vl=2392/2**7,Vy=1.7*2523/2**5,Ul=2**5/(1.7*2523),Ti=-.56,lo=16295499532821565e-27,Uy=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Wy=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],jy=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],zy=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Dh=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ka,fromBase(e){let[t,r,n]=e,i=xi*t-(xi-1)*n,s=Fi*r-(Fi-1)*t,a=ue(Uy,[i,s,n]).map(function(m){let p=Ol+_l*(m/1e4)**Ll,v=1+Vl*(m/1e4)**Ll;return(p/v)**Vy}),[u,l,c]=ue(jy,a);return[(1+Ti)*u/(1+Ti*u)-lo,l,c]},toBase(e){let[t,r,n]=e,i=(t+lo)/(1+Ti-Ti*(t+lo)),o=ue(zy,[i,r,n]).map(function(m){let p=Ol-m**Ul,v=Vl*m**Ul-_l;return 1e4*(p/v)**_y}),[a,u,l]=ue(Wy,o),c=(a+(xi-1)*l)/xi,d=(u+(Fi-1)*c)/Fi;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Qo=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Dh,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function qy(e,t){[e,t]=V([e,t]);let[r,n,i]=Qo.from(e),[s,o,a]=Qo.from(t),u=r-s,l=n-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,d=2*Math.sqrt(n*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const Eh=3424/4096,Ah=2413/128,Ch=2392/128,Wl=2610/16384,Ky=2523/32,Gy=16384/2610,jl=32/2523,Zy=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Yy=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hy=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Jy=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Xo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ka,fromBase(e){let t=ue(Zy,e);return Qy(t)},toBase(e){let t=Xy(e);return ue(Jy,t)}});function Qy(e){let t=e.map(function(r){let n=Eh+Ah*(r/1e4)**Wl,i=1+Ch*(r/1e4)**Wl;return(n/i)**Ky});return ue(Yy,t)}function Xy(e){return ue(Hy,e).map(function(n){let i=Math.max(n**jl-Eh,0),s=Ah-Ch*n**jl;return 1e4*(i/s)**Gy})}function e2(e,t){[e,t]=V([e,t]);let[r,n,i]=Xo.from(e),[s,o,a]=Xo.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-o)**2+(i-a)**2)}const t2=Be.D65,$h=.42,zl=1/$h,co=2*Math.PI,kh=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],r2=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],n2=[[460,451,288],[460,-891,-261],[460,-220,-6300]],i2={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Sr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},s2=180/Math.PI,ql=Math.PI/180;function Sh(e,t){return e.map(n=>{const i=Ct(t*Math.abs(n)*.01,$h);return 400*As(i,n)/(i+27.13)})}function o2(e,t){const r=100/t*27.13**zl;return e.map(n=>{const i=Math.abs(n);return As(r*Ct(i/(400-i),zl),n)})}function a2(e){let t=St(e);t<=Sr.h[0]&&(t+=360);const r=yh(Sr.h,t)-1,[n,i]=Sr.h.slice(r,r+2),[s,o]=Sr.e.slice(r,r+2),a=Sr.H[r],u=(t-n)/s;return a+100*u/(u+(i-t)/o)}function u2(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Sr.h.slice(r,r+2),[s,o]=Sr.e.slice(r,r+2);return St((t*(o*n-s*i)-100*n*o)/(t*(o-s)-100*o))}function xh(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const o=e.map(w=>w*100);s.la=t,s.yb=r;const a=o[1],u=ue(kh,o);n=i2[s.surround];const l=n[0];s.c=n[1],s.nc=n[2];const d=(1/(5*s.la+1))**4;s.fl=d*s.la+.1*(1-d)*(1-d)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(w=>Qn(1,a/w,m)),s.dRgbInv=s.dRgb.map(w=>1/w);const p=u.map((w,A)=>w*s.dRgb[A]),v=Sh(p,s.fl);return s.aW=s.nbb*(2*v[0]+v[1]+.05*v[2]),s}const Kl=xh(t2,64/Math.PI*.2,20,"average",!1);function ea(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=St(e.h)*ql:r=u2(e.H)*ql;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=Ct(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=Ct(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*Ct(s,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,m=23*(d+.305)*ja(a,23*c+a*(11*n+108*i)),p=m*n,v=m*i,w=o2(ue(n2,[d,p,v]).map(A=>A*1/1403),t.fl);return ue(r2,w.map((A,D)=>A*t.dRgbInv[D])).map(A=>A/100)}function Fh(e,t){const r=e.map(M=>M*100),n=Sh(ue(kh,r).map((M,L)=>M*t.dRgb[L]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(s,i)%co+co)%co,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*ja(a*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),l=Ct(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=Ct(c/t.aW,.5*t.c*t.z),m=100*Ct(d,2),p=4/t.c*d*(t.aW+4)*t.flRoot,v=l*d,w=v*t.flRoot,A=St(o*s2),D=a2(A),S=50*Ct(t.c*l/(t.aW+4),1/2);return{J:m,C:v,h:A,s:S,Q:p,M:w,H:D}}var l2=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ee,fromBase(e){const t=Fh(e,Kl);return[t.J,t.M,t.h]},toBase(e){return ea({J:e[0],M:e[1],h:e[2]},Kl)}});const c2=Be.D65,d2=216/24389,Th=24389/27;function f2(e){return 116*(e>d2?Math.cbrt(e):(Th*e+16)/116)-16}function ta(e){return e>8?Math.pow((e+16)/116,3):e/Th}function h2(e,t){let[r,n,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=ta(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){s=ea({J:o,C:n,h:r},t);const m=Math.abs(s[1]-a);if(m<d){if(m<=u)return s;d=m}o=o-(s[1]-a)*o/(2*s[1]),c+=1}return ea({J:o,C:n,h:r},t)}function m2(e,t){const r=f2(e[1]);if(r===0)return[0,0,0];const n=Fh(e,Ga);return[St(n.h),n.C,r]}const Ga=xh(c2,200/Math.PI*ta(50),ta(50)*100,"average",!1);var ei=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ee,fromBase(e){return m2(e)},toBase(e){return h2(e,Ga)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const p2=Math.PI/180,Gl=[1,.007,.0228];function Zl(e){e[1]<0&&(e=ei.fromBase(ei.toBase(e)));const t=Math.log(Math.max(1+Gl[2]*e[1]*Ga.flRoot,1))/Gl[2],r=e[0]*p2,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function g2(e,t){[e,t]=V([e,t]);let[r,n,i]=Zl(ei.from(e)),[s,o,a]=Zl(ei.from(t));return Math.sqrt((r-s)**2+(n-o)**2+(i-a)**2)}var cn={deltaE76:Ry,deltaECMC:Oy,deltaE2000:vh,deltaEJz:qy,deltaEITP:e2,deltaEOK:Jo,deltaEHCT:g2};function y2(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Yl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function fr(e,{method:t=nt.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=V(e),fi(arguments[1])?r=arguments[1]:r||(r=e.space),r=T.get(r),Nr(e,r,{epsilon:0}))return e;let o;if(t==="css")o=w2(e,{space:r});else{if(t!=="clip"&&!Nr(e,r)){Object.prototype.hasOwnProperty.call(Yl,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=Yl[t]);let a=vh;if(n!==""){for(let l in cn)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=cn[l];break}}let u=fr(ae(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(s).length===3){let S=T.resolveCoord(s.channel),M=Qe(ae(e,S.space),S.id);if(cr(M)&&(M=0),M>=s.max)return ae({space:"xyz-d65",coords:Be.D65},e.space);if(M<=s.min)return ae({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=T.resolveCoord(t),c=l.space,d=l.id,m=ae(e,c);m.coords.forEach((S,M)=>{cr(S)&&(m.coords[M]=0)});let v=(l.range||l.refRange)[0],w=y2(i),A=v,D=Qe(m,d);for(;D-A>w;){let S=ln(m);S=fr(S,{space:r,method:"clip"}),a(m,S)-i<w?A=Qe(m,d):D=Qe(m,d),Gt(m,d,(A+D)/2)}o=ae(m,r)}else o=u}else o=ae(e,r);if(t==="clip"||!Nr(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(o=ae(o,e.space)),e.coords=o.coords,e}fr.returns="color";const Hl={WHITE:{space:un,coords:[1,0,0]},BLACK:{space:un,coords:[0,0,0]}};function w2(e,{space:t}={}){e=V(e),t||(t=e.space),t=T.get(t);const i=T.get("oklch");if(t.isUnbounded)return ae(e,t);const s=ae(e,i);let o=s.coords[0];if(o>=1){const v=ae(Hl.WHITE,t);return v.alpha=e.alpha,ae(v,t)}if(o<=0){const v=ae(Hl.BLACK,t);return v.alpha=e.alpha,ae(v,t)}if(Nr(s,t,{epsilon:0}))return ae(s,t);function a(v){const w=ae(v,t),A=Object.values(t.coords);return w.coords=w.coords.map((D,S)=>{if("range"in A[S]){const[M,L]=A[S].range;return gh(M,D,L)}return D}),w}let u=0,l=s.coords[1],c=!0,d=ln(s),m=a(d),p=Jo(m,d);if(p<.02)return m;for(;l-u>1e-4;){const v=(u+l)/2;if(d.coords[1]=v,c&&Nr(d,t,{epsilon:0}))u=v;else if(m=a(d),p=Jo(m,d),p<.02){if(.02-p<1e-4)break;c=!1,u=v}else l=v}return m}function ae(e,t,{inGamut:r}={}){e=V(e),t=T.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=fr(i,r===!0?void 0:r)),i}ae.returns="color";function Un(e,{precision:t=nt.precision,format:r="default",inGamut:n=!0,...i}={}){let s;e=V(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!Nr(e)&&(a=fr(ln(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(m=>ns(m,{precision:t})));let l=[...a];if(u==="color"){let m=r.id||r.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=ns(c,{precision:t}));let d=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;s=`${u}(${l.join(r.commas?", ":" ")}${d})`}return s}const v2=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],b2=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Cs=new Ke({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:v2,fromXYZ_M:b2});const Ni=1.09929682680944,Jl=.018053968510807;var Nh=new Ke({id:"rec2020",name:"REC.2020",base:Cs,toBase(e){return e.map(function(t){return t<Jl*4.5?t/4.5:Math.pow((t+Ni-1)/Ni,1/.45)})},fromBase(e){return e.map(function(t){return t>=Jl?Ni*Math.pow(t,.45)-(Ni-1):4.5*t})}});const D2=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],E2=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Mh=new Ke({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:D2,fromXYZ_M:E2});const A2=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],be=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Bh=new Ke({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:A2,fromXYZ_M:be}),Ql={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Xl=Array(3).fill("<percentage> | <number>[0, 255]"),ec=Array(3).fill("<number>[0, 255]");var dn=new Ke({id:"srgb",name:"sRGB",base:Bh,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Xl},rgb_number:{name:"rgb",commas:!0,coords:ec,noAlpha:!0},color:{},rgba:{coords:Xl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ec},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ql.black,t.alpha=0):t.coords=Ql[e],t.coords)return t}}}}),Ph=new Ke({id:"p3",cssId:"display-p3",name:"P3",base:Mh,fromBase:dn.fromBase,toBase:dn.toBase});nt.display_space=dn;let C2;if(typeof CSS<"u"&&CSS.supports)for(let e of[Xe,Nh,Ph]){let t=e.getMinCoords(),n=Un({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){nt.display_space=e;break}}function $2(e,{space:t=nt.display_space,...r}={}){let n=Un(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!nt.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(cr)||cr(e.alpha))&&!(C2??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=ln(e),i.coords=i.coords.map(ge),i.alpha=ge(i.alpha),n=Un(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=ae(i,t),n=new String(Un(i,r)),n.color=i}return n}function k2(e,t){return e=V(e),t=V(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function hr(e){return Qe(e,[Ee,"y"])}function Ih(e,t){Gt(e,[Ee,"y"],t)}function S2(e){Object.defineProperty(e.prototype,"luminance",{get(){return hr(this)},set(t){Ih(this,t)}})}var x2=Object.freeze({__proto__:null,getLuminance:hr,register:S2,setLuminance:Ih});function F2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const T2=.56,N2=.57,M2=.62,B2=.65,tc=.022,P2=1.414,I2=.1,R2=5e-4,L2=1.14,rc=.027,O2=1.14;function nc(e){return e>=tc?e:e+(tc-e)**P2}function _r(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function _2(e,t){t=V(t),e=V(e);let r,n,i,s,o,a;t=ae(t,"srgb"),[s,o,a]=t.coords;let u=_r(s)*.2126729+_r(o)*.7151522+_r(a)*.072175;e=ae(e,"srgb"),[s,o,a]=e.coords;let l=_r(s)*.2126729+_r(o)*.7151522+_r(a)*.072175,c=nc(u),d=nc(l),m=d>c;return Math.abs(d-c)<R2?n=0:m?(r=d**T2-c**N2,n=r*L2):(r=d**B2-c**M2,n=r*O2),Math.abs(n)<I2?i=0:n>0?i=n-rc:i=n+rc,i*100}function V2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const U2=5e4;function W2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);return n>r&&([r,n]=[n,r]),n===0?U2:(r-n)/n}function j2(e,t){e=V(e),t=V(t);let r=Qe(e,[Xe,"l"]),n=Qe(t,[Xe,"l"]);return Math.abs(r-n)}const z2=216/24389,ic=24/116,Mi=24389/27;let fo=Be.D65;var ra=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fo,base:Ee,fromBase(e){let r=e.map((n,i)=>n/fo[i]).map(n=>n>z2?Math.cbrt(n):(Mi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ic?Math.pow(t[0],3):(116*t[0]-16)/Mi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Mi,t[2]>ic?Math.pow(t[2],3):(116*t[2]-16)/Mi].map((n,i)=>n*fo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const ho=Math.pow(5,.5)*.5+.5;function q2(e,t){e=V(e),t=V(t);let r=Qe(e,[ra,"l"]),n=Qe(t,[ra,"l"]),i=Math.abs(Math.pow(r,ho)-Math.pow(n,ho)),s=Math.pow(i,1/ho)*Math.SQRT2-40;return s<7.5?0:s}var ji=Object.freeze({__proto__:null,contrastAPCA:_2,contrastDeltaPhi:q2,contrastLstar:j2,contrastMichelson:V2,contrastWCAG21:F2,contrastWeber:W2});function K2(e,t,r={}){fi(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(ji).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=V(e),t=V(t);for(let s in ji)if("contrast"+n.toLowerCase()===s.toLowerCase())return ji[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function $s(e){let[t,r,n]=hi(e,Ee),i=t+15*r+3*n;return[4*t/i,9*r/i]}function Rh(e){let[t,r,n]=hi(e,Ee),i=t+r+n;return[t/i,r/i]}function G2(e){Object.defineProperty(e.prototype,"uv",{get(){return $s(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Rh(this)}})}var Z2=Object.freeze({__proto__:null,register:G2,uv:$s,xy:Rh});function Pn(e,t,r={}){fi(r)&&(r={method:r});let{method:n=nt.deltaE,...i}=r;for(let s in cn)if("deltae"+n.toLowerCase()===s.toLowerCase())return cn[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function Y2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Gt(e,n,i=>i*(1+t))}function H2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Gt(e,n,i=>i*(1-t))}var J2=Object.freeze({__proto__:null,darken:H2,lighten:Y2});function Lh(e,t,r=.5,n={}){return[e,t]=[V(e),V(t)],ur(r)==="object"&&([r,n]=[.5,r]),mi(e,t,n)(r)}function Oh(e,t,r={}){let n;Za(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[V(e),V(t)],n=mi(e,t,u));let l=Pn(e,t),c=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let m=1/(c-1);d=Array.from({length:c},(p,v)=>{let w=v*m;return{p:w,color:n(w)}})}if(i>0){let m=d.reduce((p,v,w)=>{if(w===0)return 0;let A=Pn(v.color,d[w-1].color,s);return Math.max(p,A)},0);for(;m>i;){m=0;for(let p=1;p<d.length&&d.length<a;p++){let v=d[p-1],w=d[p],A=(w.p+v.p)/2,D=n(A);m=Math.max(m,Pn(D,v.color),Pn(D,w.color)),d.splice(p,0,{p:A,color:n(A)}),p++}}}return d=d.map(m=>m.color),d}function mi(e,t,r={}){if(Za(e)){let[u,l]=[e,t];return mi(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:s,premultiplied:o}=r;e=V(e),t=V(t),e=ln(e),t=ln(t);let a={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[nt.interpolationSpace]||e.space,i=i?T.get(i):n,e=ae(e,n),t=ae(t,n),e=fr(e),t=fr(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Qe(e,l),Qe(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=Ty(u,[c,d]),Gt(e,l,c),Gt(t,l,d)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((m,p)=>{let v=t.coords[p];return Qn(m,v,u)}),c=Qn(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return o&&(d.coords=d.coords.map(m=>m/c)),i!==n&&(d=ae(d,i)),d},{rangeArgs:a})}function Za(e){return ur(e)==="function"&&!!e.rangeArgs}nt.interpolationSpace="lab";function Q2(e){e.defineFunction("mix",Lh,{returns:"color"}),e.defineFunction("range",mi,{returns:"function<color>"}),e.defineFunction("steps",Oh,{returns:"array<color>"})}var X2=Object.freeze({__proto__:null,isRange:Za,mix:Lh,range:mi,register:Q2,steps:Oh}),_h=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-n)/l+2;break;case s:o=(n-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let o=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Vh=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_h,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),ew=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Vh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let s=1-n,o=s===0?0:1-r/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const tw=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],rw=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Uh=new Ke({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:tw,fromXYZ_M:rw}),nw=new Ke({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Uh,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const iw=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],sw=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Wh=new Ke({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:qa,toXYZ_M:iw,fromXYZ_M:sw});const ow=1/512,aw=16/512;var uw=new Ke({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Wh,toBase(e){return e.map(t=>t<aw?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ow?t**(1/1.8):16*t)}}),lw=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:un,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let jh=Be.D65;const cw=216/24389,sc=24389/27,[oc,ac]=$s({space:Ee,coords:jh});var zh=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:jh,base:Ee,fromBase(e){let t=[ge(e[0]),ge(e[1]),ge(e[2])],r=t[1],[n,i]=$s({space:Ee,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=cw?sc*r:116*Math.cbrt(r)-16;return[s,13*s*(n-oc),13*s*(i-ac)]},toBase(e){let[t,r,n]=e;if(t===0||cr(t))return[0,0,0];r=ge(r),n=ge(n);let i=r/(13*t)+oc,s=n/(13*t)+ac,o=t<=8?t/sc:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ya=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:zh,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const dw=216/24389,fw=24389/27,uc=be[0][0],lc=be[0][1],mo=be[0][2],cc=be[1][0],dc=be[1][1],po=be[1][2],fc=be[2][0],hc=be[2][1],go=be[2][2];function Vr(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function os(e){const t=Math.pow(e+16,3)/1560896,r=t>dw?t:e/fw,n=r*(284517*uc-94839*mo),i=r*(838422*mo+769860*lc+731718*uc),s=r*(632260*mo-126452*lc),o=r*(284517*cc-94839*po),a=r*(838422*po+769860*dc+731718*cc),u=r*(632260*po-126452*dc),l=r*(284517*fc-94839*go),c=r*(838422*go+769860*hc+731718*fc),d=r*(632260*go-126452*hc);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function mc(e,t){const r=t/360*Math.PI*2,n=Vr(e.r0s,e.r0i,r),i=Vr(e.r1s,e.r1i,r),s=Vr(e.g0s,e.g0i,r),o=Vr(e.g1s,e.g1i,r),a=Vr(e.b0s,e.b0i,r),u=Vr(e.b1s,e.b1i,r);return Math.min(n,i,s,o,a,u)}var hw=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ya,gamutSpace:dn,fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=os(t),o=mc(s,n);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=os(n);i=mc(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});be[0][0];be[0][1];be[0][2];be[1][0];be[1][1];be[1][2];be[2][0];be[2][1];be[2][2];function Ur(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function pc(e){let t=Ur(e.r0s,e.r0i),r=Ur(e.r1s,e.r1i),n=Ur(e.g0s,e.g0i),i=Ur(e.g1s,e.g1i),s=Ur(e.b0s,e.b0i),o=Ur(e.b1s,e.b1i);return Math.min(t,r,n,i,s,o)}var mw=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ya,gamutSpace:"self",fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=os(t),o=pc(s);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=os(n);i=pc(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const gc=203,yc=2610/2**14,pw=2**14/2610,gw=2523/2**5,wc=2**5/2523,vc=3424/2**12,bc=2413/2**7,Dc=2392/2**7;var yw=new Ke({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Cs,toBase(e){return e.map(function(t){return(Math.max(t**wc-vc,0)/(bc-Dc*t**wc))**pw*1e4/gc})},fromBase(e){return e.map(function(t){let r=Math.max(t*gc/1e4,0),n=vc+bc*r**yc,i=1+Dc*r**yc;return(n/i)**gw})}});const Ec=.17883277,Ac=.28466892,Cc=.55991073,yo=3.7743;var ww=new Ke({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Cs,toBase(e){return e.map(function(t){return t<=.5?t**2/3*yo:(Math.exp((t-Cc)/Ec)+Ac)/12*yo})},fromBase(e){return e.map(function(t){return t/=yo,t<=1/12?Math.sqrt(3*t):Ec*Math.log(12*t-Ac)+Cc})}});const qh={};dr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Kh(e.W1,e.W2,e.options.method))});dr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Kh(e.W1,e.W2,e.options.method))});function ks({id:e,toCone_M:t,fromCone_M:r}){qh[e]=arguments[0]}function Kh(e,t,r="Bradford"){let n=qh[r],[i,s,o]=ue(n.toCone_M,e),[a,u,l]=ue(n.toCone_M,t),c=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],d=ue(c,n.toCone_M);return ue(n.fromCone_M,d)}ks({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ks({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ks({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ks({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Be,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Be.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const vw=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],bw=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Gh=new Ke({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Be.ACES,toXYZ_M:vw,fromXYZ_M:bw});const Bi=2**-16,wo=-.35828683,Pi=(Math.log2(65504)+9.72)/17.52;var Dw=new Ke({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[wo,Pi],name:"Red"},g:{range:[wo,Pi],name:"Green"},b:{range:[wo,Pi],name:"Blue"}},referred:"scene",base:Gh,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Bi)*2:r<Pi?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Bi)+9.72)/17.52:t<Bi?(Math.log2(Bi+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),$c=Object.freeze({__proto__:null,A98RGB:nw,A98RGB_Linear:Uh,ACEScc:Dw,ACEScg:Gh,CAM16_JMh:l2,HCT:ei,HPLuv:mw,HSL:_h,HSLuv:hw,HSV:Vh,HWB:ew,ICTCP:Xo,JzCzHz:Qo,Jzazbz:Dh,LCH:Xn,LCHuv:Ya,Lab:Xe,Lab_D65:ra,Luv:zh,OKLCH:lw,OKLab:un,P3:Ph,P3_Linear:Mh,ProPhoto:uw,ProPhoto_Linear:Wh,REC_2020:Nh,REC_2020_Linear:Cs,REC_2100_HLG:ww,REC_2100_PQ:yw,XYZ_ABS_D65:Ka,XYZ_D50:qa,XYZ_D65:Ee,sRGB:dn,sRGB_Linear:Bh});let ee=class Ve{constructor(...t){let r;t.length===1&&(r=V(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Ve(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=$2(this,...t);return r.color=new Ve(r.color),r}static get(t,...r){return t instanceof Ve?t:new Ve(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,o=function(...a){let u=r(...a);if(s==="color")u=Ve.get(u);else if(s==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Ve.get(d)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Ve.get(l)));return u};t in Ve||(Ve[t]=o),i&&(Ve.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Ve.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ve);else for(let r in t)Ve.defineFunction(r,t[r])}};ee.defineFunctions({get:Qe,getAll:hi,set:Gt,setAll:za,to:ae,equals:k2,inGamut:Nr,toGamut:fr,distance:bh,toString:Un});Object.assign(ee,{util:Cy,hooks:dr,WHITES:Be,Space:T,spaces:T.registry,parse:wh,defaults:nt});for(let e of Object.keys($c))T.register($c[e]);for(let e in T.registry)na(e,T.registry[e]);dr.add("colorspace-init-end",e=>{na(e.id,e),e.aliases?.forEach(t=>{na(t,e)})});function na(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ee.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return T.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=T.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=T.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ee.extend(cn);ee.extend({deltaE:Pn});Object.assign(ee,{deltaEMethods:cn});ee.extend(J2);ee.extend({contrast:K2});ee.extend(Z2);ee.extend(x2);ee.extend(X2);ee.extend(ji);const Ew=Symbol("no update");class vo extends gr()("observable-value-update"){}class Aw extends Xf("observable-destroy"){}class Cw{listenTarget=new Na;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===Ew||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new vo({detail:r})),!0)}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(vo,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(vo,r)}destroy(){this.listenTarget.dispatch(new Aw),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function $w(e,t){return Jg(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}const Zh="__vir__shape__definition__key__do__not__use__in__actual__objects",Ha="__vir__shape__specifier__key__do__not__use__in__actual__objects",Yh="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Ja(e){return E.hasKey(e,Yh)}function Hh({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[Yh]:!0,[Ha]:!0}}Hh({customName:"UUID",defaultValue:nn.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function Qa(e){return E.hasKey(e,Zh)}var ye;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(ye||(ye={}));function kw(...e){return wr(e,ye.And)}function ia(...e){return wr(e,ye.Enum)}function _(...e){return wr(e,ye.Exact)}function Ss(...e){return wr(e,ye.IndexedKeys)}function te(...e){return wr(e,ye.Or)}function Sw(e){return wr([e],ye.Unknown)}function qr(e,t){return wr([e,t],ye.NumericRange)}function Je(e){return wr([e],ye.Optional)}function xs(e){return xt(e,ye.And)}function Fs(e){return xt(e,ye.Class)}function Ts(e){return xt(e,ye.Enum)}function Ns(e){return xt(e,ye.Exact)}function Ms(e){return xt(e,ye.IndexedKeys)}function Jh(e){return xt(e,ye.Tuple)}function pi(e){return xt(e,ye.Or)}function Bs(e){return xt(e,ye.Unknown)}function Qh(e){return xt(e,ye.NumericRange)}function as(e){return xt(e,ye.Optional)}function xt(e,t){const r=gi(e);return!!r&&r.specifierType===t}function wr(e,t){return{[Ha]:!0,specifierType:t,parts:e}}function gi(e){if(!(!E.isObject(e)||!E.hasKey(e,Ha)))return e}class kc extends TypeError{name="DefaultValueConstructionError"}function xw({subject:e,shape:t}){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1,o=i||s||Fw({shapeConstructor:r,subject:e});return typeof e==typeof t&&o}function Fw({shapeConstructor:e,subject:t}){return t.constructor==null&&e===Object}class We extends TypeError{name="ShapeMismatchError"}function Xh(e,t,r={}){try{return e0(e,t,r),!0}catch{return!1}}function e0(e,t,r={},n=""){try{Fe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?fs(i,n):i}}function sa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Fe({subject:e,shape:t,keys:r,options:n}){if(Bs(t))return!0;if(Qa(t))return Fe({subject:e,shape:t.shape,keys:r,options:n});if(Ja(t)){if(!t.checker(e))throw new We(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const i=sa(r);if(gi(e))throw new We(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Jh(t)){if(!E.isArray(e))throw new We(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return Fe({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(as(t))return Fe({keys:r,options:n,shape:t.parts[0],subject:e});if(zi(e,t,r,n)){if(E.isFunction(t))return E.isFunction(e);if(Fs(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(pi(t)){const c=[];l=t.parts.some(d=>{try{const m=Fe({subject:e,shape:d,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof We)return c.push(m.message),!1;throw m}}),!l&&E.isLengthAtLeast(c,1)&&u.push(c[0])}else if(xs(t))l=t.parts.every(c=>{try{const d=Fe({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof We)return u.push(d.message),!1;throw d}});else if(Ns(t)){const c=Fe({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(Ts(t))throw new We(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((c,d)=>{const m=t.some(p=>{try{return Fe({subject:c,shape:p,keys:[...r,d],options:n}),!0}catch(v){if(v instanceof We)return u.push(v.message),!1;throw v}});return a[d]=m,m});else if(Ms(t)){const c=Le(e,(d,m)=>(n.ignoreExtraKeys||Fe({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),Fe({shape:t.parts[0].values,subject:m,keys:[...r,d],options:n}),!0));Object.assign(a,c),l=!0}else{const c=Tw({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new We(ds(u));if(!l){const d=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>sa([...r,m])).join(",")}`;throw new We(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,d])=>{if(!d)throw new We(`subject as extra key '${c}' in ${i}.`)}),a}else if(n.exactValues)return e===t}else throw new We(`Subject does not match shape definition at key ${i}`)}return!0}function Tw({keys:e,options:t,shape:r,subject:n}){const i=sa(e),s={};if(E.isObject(r)){const o=new Set(X(r)),a=new Set(X(n));o.forEach(u=>{(u in n||as(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new We(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],c=pi(l)?l.parts.includes(void 0):!1,d=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!d)throw new We(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in n)&&as(r[u])){s[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];Fe({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new We(`Shape definition at ${i} was not an object.`);return s}function zi(e,t,r,n,i){const s=gi(t);if(s){if(Ja(s))return s.checker(e);if(Qh(s))return E.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(Fs(s))return e instanceof s.parts[0];if(xs(s))return s.parts.every(o=>{try{return Fe({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(pi(s))return s.parts.some(o=>{try{return Fe({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(Ns(s))return E.isObject(e)?(Fe({subject:e,shape:s.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===s.parts[0];if(Ts(s))return E.hasValue(Object.values(s.parts[0]),e);if(Ms(s)){if(!E.isObject(e))return!1;const o=Nw(e,s,!!n.ignoreExtraKeys),a=Ko(e).every(u=>{try{return Fe({subject:u,shape:s.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(Bs(s))return!0}return i?t===e:xw({subject:e,shape:t})}function Nw(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys,s=Xa(t);if(E.isBoolean(s))return X(e).every(u=>zi(u,i,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?s.every(u=>X(e).some(l=>zi(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return X(e).every(u=>s.includes(u)?zi(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function Xa(e){const t=e.parts[0].keys,r=gi(t);if(E.isPropertyKey(t))return!0;if(r){if(Fs(r))return!1;if(xs(r))return!1;if(pi(r)){const n=r.parts.map(i=>Xa(Ss({...e.parts[0],keys:i})));return n.includes(!1)?!1:n.flat().filter(E.isPropertyKey)}else if(Ns(r)){const n=r.parts.filter(E.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(Ts(r))return Object.values(r.parts[0]);if(Ms(r))return!1;if(Bs(r))return!0}}return!1}function oa(e){return kr(e)}function kr(e){const t=gi(e);if(Ja(e))return e.defaultValue;if(t){if(Jh(t))return t.parts.map(r=>kr(r));if(as(t))return kr(t.parts[0]);if(Qh(t))return t.parts[0];if(Fs(t)){const r=t.parts[0];try{return new r}catch(n){throw new kc(`Failed to create default value for classShape for class '${r.name}': ${Re(n)}`)}}else{if(pi(t)||Ns(t))return kr(t.parts[0]);if(xs(t))return t.parts.reduce((r,n)=>Object.assign(r,kr(n)),{});if(Ts(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Ms(t)){const r=Xa(t);return!t.parts[0].required||E.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,kr(t.parts[0].values)]))}else{if(Bs(t))return t.parts[0]??{};throw new kc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Qa(e)?oa(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(kr):E.isObject(e)?Le(e,(r,n)=>oa(n)):e}function ct(e,t=!1){if(Qa(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return oa(e)},[Zh]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const Mw=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],t0=Mw.reduce((e,t)=>(e[t]=t,e),{});oe.defaultZone.name;const r0=t0.UTC,Bw=ct({hour:qr(Hu.min,Hu.max),minute:qr(Ju.min,Ju.max),second:qr(Qu.min,Qu.max),millisecond:qr(Xu.min,Xu.max),timezone:ia(t0,r0)}),Pw=ct({year:2023,month:qr(Zu.min,Zu.max),day:qr(Yu.min,Yu.max),timezone:r0});ct(kw(Pw,Bw));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";ct(te({get:_(N.Month),in:te(_(N.Year),_(N.Quarter))},{get:_(N.Week),in:te(_(N.Year),_(N.Quarter),_(N.Month))},{get:_(N.Day),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week))},{get:_(N.Hour),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day))},{get:_(N.Minute),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour))},{get:_(N.Second),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute))},{get:_(N.Millisecond),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute),_(N.Second))}));var Sc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Sc||(Sc={}));var aa;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(aa||(aa={}));var xc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(xc||(xc={}));const Iw={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};P1(Iw,gt(aa));oe.defaultLocale;ct(Hh({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return Rw(e)}}));function Rw(e){return I.fromISO(e).toUTC().toISO()===e}const Lw=ct({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:Sw()});function bo(e){return Xh(e,Lw,{allowExtraKeys:!0})}class n0 extends Cw{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||$w}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ow}=gy,Fc=()=>document.createComment(""),xn=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(Fc(),i),o=n.insertBefore(Fc(),i);r=new Ow(s,o,e,e.options)}else{const s=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(s!==i||a){let u=r._$AA;for(;u!==s;){const l=u.nextSibling;n.insertBefore(u,i),u=l}}}return r},$r=(e,t,r=e)=>(e._$AI(t,r),e),_w={},Vw=(e,t=_w)=>e._$AH=t,Uw=e=>e._$AH,Do=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Yt=e=>(...t)=>({_$litDirective$:e,values:t});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ww={attribute:!0,type:String,converter:ts,reflect:!1,hasChanged:Oa},jw=(e=Ww,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function zw(e){return(t,r)=>typeof r=="object"?jw(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=Yt(class extends Ht{constructor(e){if(super(e),e.type!==eu.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return rt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=e=>e??K;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qw(e,t,r){return e?t(e):r?.(e)}class Kw extends Vn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function Gw(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function ua(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function tu(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function i0(e){return di(e,t=>{if(ua(t))return t.definition;if(tu(t))return t.tagInterpolationKey||t},E.isTruthy)}const s0=new WeakMap;function Zw(e,t){const r=i0(t);return o0(s0,[e,...r]).value?.template}function Yw(e,t,r){const n=i0(t);return u0(s0,[e,...n],r)}function o0(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=a0(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?o0(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function a0(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function u0(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=a0(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),u0(u,t,r,n+1)}function l0(e,t,r){const n=Zw(e,t),i=n??r();if(!n){const a=Yw(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=Gw(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function c0(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,m=i[d],p=c-1,v=t[p];n&&n(l);let w,A=[];if(typeof m=="string"&&(w=r(m,l,v),w)){i[d]=[m,w.replacement].join(""),o.push(p);const S=w.getExtraValues;A=S?S(v):[],A.length&&S?(i[d]+=" ",A.forEach((M,L)=>{L&&i.push(" ")}),a.push(M=>{const L=M[p],q=S(L);return{index:p,values:q}}),i.push(l)):i[d]+=l}w||i.push(l);const D=e.raw[c];w?(s[d]=[s[d],w.replacement,D].join(""),A.length&&A.forEach(()=>{s.push("")})):s.push(D)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function Hw(...[e,t,r]){if(tu(r))return{replacement:r.tagName,getExtraValues:void 0}}function Jw(e,t){return c0(e,t,Hw)}function k(e,...t){const r=l0(e,t,()=>Jw(e,t));return Wi(r.strings,...r.values)}const Qw={allowPolymorphicState:!1};function d0(e,t){const r=e.instanceState;X(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&X(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function Tc(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Xw extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function ru(){return e=>class extends Xw{static type=e;_type=e;constructor(t){super(e,t)}}}function Ie(){return ru()}function ev(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=ru()([e,n].join("-"));return r[n]=i,r},{}):{}}function tv(e){return e?Le(e,t=>t):{}}function f0(e,t){t in e||zw()(e,t)}function rv(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Nc(e,t){const r=e;function n(o){t?rv(o,e,e.tagName):f0(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,u){n(a);const l=r[a];function c(m){o[a]=m,r[a]=m}const d=e.observablePropertyListenerMap[a];if(l!==u&&bo(l)&&d&&l.removeListener(d),bo(u))if(d)u.listen(!1,d);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else bo(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function nv({hostClassNames:e,cssVars:t}){return{hostClasses:Le(e,(r,n)=>({name:me(n),selector:me(`:host(.${n})`)})),cssVars:t}}function iv({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&X(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function sv({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){X(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function ov(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function nu(...e){return pr.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return av({...r,options:{...r.options}})}}function av(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...Qw,...e.options},r=ev(e.tagName,e.events),n=tv(e.hostClasses);e.hostClasses&&Tc(e.tagName,e.hostClasses),e.cssVars&&Tc(e.tagName,e.cssVars);const i=e.cssVars?yr(e.cssVars):{},s=ov(e.slotNames),o=typeof e.styles=="function"?e.styles(nv({hostClassNames:n,cssVars:i})):e.styles||k``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends Kw{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return sv({element:this,eventsMap:r,cssVars:i,slotNamesMap:s})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");X(m).forEach(p=>{f0(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=a(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return iv({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=fs(c,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,Re(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(c){d0(this,c)}observablePropertyListenerMap={};instanceInputs=Nc(this,!1);instanceState=Nc(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:_1(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mc=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},uv=Yt(class extends Ht{constructor(e){if(super(e),e.type!==eu.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,s[o]=r(a,o),o++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Uw(e),{values:s,keys:o}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,c,d=0,m=i.length-1,p=0,v=s.length-1;for(;d<=m&&p<=v;)if(i[d]===null)d++;else if(i[m]===null)m--;else if(a[d]===o[p])u[p]=$r(i[d],s[p]),d++,p++;else if(a[m]===o[v])u[v]=$r(i[m],s[v]),m--,v--;else if(a[d]===o[v])u[v]=$r(i[d],s[v]),xn(e,u[v+1],i[d]),d++,v--;else if(a[m]===o[p])u[p]=$r(i[m],s[p]),xn(e,i[d],i[m]),m--,p++;else if(l===void 0&&(l=Mc(o,p,v),c=Mc(a,d,m)),l.has(a[d]))if(l.has(a[m])){const w=c.get(o[p]),A=w!==void 0?i[w]:null;if(A===null){const D=xn(e,i[d]);$r(D,s[p]),u[p]=D}else u[p]=$r(A,s[p]),xn(e,i[d],A),i[w]=null;p++}else Do(i[m]),m--;else Do(i[d]),d++;for(;p<=v;){const w=xn(e,u[v+1]);$r(w,s[p]),u[p++]=w}for(;d<=m;){const w=i[d++];w!==null&&Do(w)}return this.ut=o,Vw(e,u),rt}}),lv=uv;function yi(e,t){return ti(e,t),e.element}function cv(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ti(e,t){const r=cv(e),n=r?`: in ${r}`:"";if(e.type!==eu.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function dv(e,t){return Yt(class extends Ht{element;constructor(r){super(r),this.element=nn.instanceOf(yi(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),rt}})}const la=dv("attributes",({element:e,params:[t],directive:r})=>{const i=ci(r,"allAttributesApplied",()=>new Set);X(t).forEach(s=>{if(s.toLowerCase()!==s)throw new Error(`Cannot assign attribute name with uppercase letters: ${s}`);i.add(s)}),i.forEach(s=>{const o=t[s];o==null||o===!1||o===K?e.removeAttribute(s):o===""||o===!0?e.setAttribute(s,""):e.setAttribute(s,String(o))})});function fv(e){const t=Yt(class extends Ht{element;constructor(r){super(r),this.element=yi(r,e)}render(r){return this.element.setAttribute(e,r),rt}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function G(e,t){return hv(e,t)}const hv=Yt(class extends Ht{element;lastListenerMetaData;constructor(e){super(e),this.element=yi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),rt}}),Bc="onDomCreated",Pc=Yt(class extends Ht{element;constructor(e){super(e),ti(e,Bc)}update(e,[t]){ti(e,Bc);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Eo="onResize",h0=Yt(class extends Ht{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),ti(e,Eo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${Eo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ti(e,Eo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Pe(e,t,r){return qw(e,()=>t,()=>r)}const{attributeDirective:mv}=fv("data-test-id"),Jr=mv;function m0(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),nu(...n)(r(i)))}function pv(e,t){return gv(void 0,e)}const gv=Yt(class extends Ht{element;constructor(e){super(e),this.element=yi(e,"assign")}render(e,t){return d0(this.element,t),rt}}),yv={};function wv(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=p0(i,s);if(o&&E.isString(r))return{tagName:r,tagInterpolationKey:ci(yv,r,()=>({tagName:r}))}}return r})}function p0(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function vv(...[e,t,r]){const n=ua(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=p0(e,t),o=tu(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=ua(u)?u.inputs:void 0;return[i&&l?pv(l):void 0].filter(E.isTruthy)}}}function bv(e){}function Dv(e){return c0(e.strings,e.values,vv,bv)}function g(e,...t){const r=wv(e,t),n=ly(e,...r),i=l0(e,r,()=>Dv(n));return{...n,strings:i.strings,values:i.values}}function ca(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],s=(t??[""]).map((o,a)=>{const u=Ev(o,n[a]);return`${o}${u}`});return Qf(s.join(""))}function Ev(e,t){return t._$litType$!=null||t._$litDirective$!=null?ca(t):Array.isArray(t)?t.map(n=>ca(n)).join(""):e.endsWith("=")?`"${t}"`:t}function g0(e){return Le(e,(t,r)=>r instanceof ee?me(r.toString({format:"hex"})):g0(r))}const Av="dodgerblue";function da(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ao({background:e,foreground:t}){return{background:e??new ee(da(t)),foreground:t??new ee(da(e))}}function Cv(e){return e==="black"?"white":"black"}const $v={black:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")},white:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")}},kv={black:{backgroundFaint1:new ee("#666"),backgroundFaint2:new ee("#444")},white:{backgroundFaint1:new ee("#ccc"),backgroundFaint2:new ee("#fafafa")}};function Ic({themeColor:e=Av,themeStyle:t="light"}={}){const r=new ee(e),n=new ee(t==="dark"?"black":"white"),i=da(n),s=new ee(i),o={nav:{hover:Ao({background:r.clone().set({"hsl.l":93})}),active:Ao({background:r.clone().set({"hsl.l":90})}),selected:Ao({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...kv[Cv(i)],foreground:s,...$v[i]}};return g0(o)}var Vt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(Vt||{});async function fa(e=1){const t=new ud;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Sv(e,t){return{element:e,children:y0(e)}}function y0(e,t,r){return xv(e).map(n=>{const i=y0(n);return{element:n,children:i}})}function xv(e){return[...e.children,...e.shadowRoot?.children??[]]}function Co(e){return e.matches(":focus")}function iu(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:iu(t)}function w0(e,t){if(t(e))return e;const r=iu(e);if(r)return w0(r,t)}async function Fv(e){return Tv(e,1)}async function Tv(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{pr.isLengthAtLeast(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function In(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}function Nv(e){const t=iu(e);return t&&w0(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Mv({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=s.codePointAt(o);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const Bv=jf(32);function qi(e){return e.join(Bv)}function v0(e){if(!e.length)return[];const t=qi(e),r=v0(e.slice(0,-1));return[t,...r]}const Pv=["error","errors"];function Iv(e){return Pv.includes(e)}function Rv({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(o=>(n(o),qi(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&Iv(t),o=qi(i.fullUrlBreadcrumbs);if(Mv({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>E.isString(u)?u:ca(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[o]){const u=v0(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(i=>{const s=qi(i.fullUrlBreadcrumbs),o=r[s];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class su extends Error{name="SpaRouterError"}class Rc extends su{name="GlobalUrlEventsConsolidationError"}class Lv extends su{name="SanitizationDepthMaxed"}ct({paths:[""],search:Je(te(void 0,Ss({keys:"",values:[""],required:!1}))),hash:Je(te(void 0,""))});const Ov=ct({basePath:te("",void 0),sanitizeRoute:e=>e,maxListenerCount:te(1,void 0),disableWarnings:te(void 0,!1),isPaused:te(!1,void 0)}),$o="://";function ou(...e){const t=e.join("/"),[r,n=""]=t.includes($o)?t.split($o):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const c=l[u+1];let d=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,v=c==="?";if(m||p){i=!0;let w=!1;const A=l.slice(u+2).reduce((D,S)=>(S.includes("#")&&(w=!0),w?D.concat(S):[D,S].join("&")),"");d=[a,c,v?Yr({value:A,prefix:"&"}):A].join("")}return o.concat(d)},[]);return[r,r?$o:"",s.join("/")].join("")}var fn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(fn||(fn={}));var hn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(hn||(hn={}));const _v=ct({encoding:Je(te(void 0,ia(fn))),searchParamStrategy:Je(te(void 0,ia(hn)))});function Ii(e,t){return e.map(r=>{if(r!=null)return Qr(String(r),t)}).filter(r=>r!=null)}function Qr(e,t){return t?.encoding===fn.Decode?decodeURIComponent(e):t?.encoding===fn.Encode?encodeURIComponent(e):e}const Vv=ct(Ss({keys:"",values:[""],required:!0}));function Uv(e,t,r){const n=r?.searchParamStrategy===hn.Clear?{}:Le(e,(o,a)=>E.isString(a)?[a]:a),i=Le(t,(o,a)=>{if(r?.searchParamStrategy===hn.Append){const u=n[o],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return Ii([...l,...c],r)}else return Ii(l,r)}else return E.isArray(a)?Ii(a,r):a?Ii([a],r):void 0});return bs({...n,...i},(o,a)=>!!a)}function b0(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=M1(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=D0({options:t,key:o,value:a}),l=ci(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function Wv(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function jv(e,t){const r=di(Object.entries(e),([n,i])=>{const s=Wv(i);return s?.length?s.map(o=>{const a=D0({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?tt({value:r.join("&"),prefix:"?"}):""}function D0({options:e,key:t,value:r}){return{key:Qr(t,e),value:Qr(String(r),e)}}function E0({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",Ps({hostname:t,port:i}),au({hash:e,pathname:n,search:o})].join("")}function A0({pathname:e}){const t=Yr({value:e,prefix:"/"});return t?t.split("/"):[]}function au({hash:e,pathname:t,search:r}){return[tt({value:t,prefix:"/"}),r?tt({value:r,prefix:"?"}):"",e?tt({value:e,prefix:"#"}):""].join("")}function Ps({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function C0({hostname:e,port:t,protocol:r}){return[r,Ps({hostname:e,port:t})].filter(E.isTruthy).join("://")}function Xr(e,t){const r=E.isString(e)?Yr({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?tt({value:Qr(n,t),prefix:"#"}):"",s=r.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?tt({value:Qr(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=d!==m,[v,...w]=p?d.split(":").reverse():[],A=w.toReversed().join("").replace(/[/:]/g,"")||"",D=v?.replace(/[/:]/g,"")||"",S=N1(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=S[0]?.endsWith("]")?"":S[1]===":"&&S[0]||"",q=m.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),xe=m.replace(/^[^/]*(\/|$)/,"$1"),ft=Qr(xe.replace(/^[^/]*(?:\/|$)/,"/"),t),Oe=Ps({hostname:q,port:M}),Ze=C0({hostname:q,port:M,protocol:l}),Et=E0({hash:i,hostname:q,password:D,pathname:ft,port:M,protocol:l,search:a,username:A}),Ft=b0(a),wi=A0({pathname:ft});return{fullPath:au({hash:i,pathname:ft,search:a}),hash:i,host:Oe,hostname:q,href:Et,origin:Ze,password:D,pathname:ft,paths:wi,port:M,protocol:l,search:a,searchParams:Ft,username:A}}ct({hash:Je(te(void 0,"")),search:Je(te(void 0,"",Ss({keys:"",required:!1,values:te(null,void 0,"",-1,!1,0n)}))),hostname:Je(te(void 0,"")),pathname:Je(te(void 0,"")),paths:Je(te(void 0,[""])),protocol:Je(te(void 0,"")),username:Je(te(void 0,"")),password:Je(te(void 0,"")),port:Je(te(void 0,"",-1))});function zv(e,t,r){const n=!!r,i=t==null||Xh(t,_v),s=i?Xr(""):E.instanceOf(e,URL)||E.isString(e)?Xr(e):e,o=i?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?bs(Xr(o),(w,A)=>E.isTruthy(A)):o,l=n?r:i?t:void 0,c=Le(s,(w,A)=>{if(!E.hasKey(u,w))return A;const D=u[w];return E.isNumber(D)?String(D):E.isString(D)?w==="hash"&&D?tt({value:D,prefix:"#"}):w==="pathname"?tt({value:D,prefix:"/"}):D:A});E.hasKey(u,"paths")&&u.paths&&(c.pathname=ou(a?s.pathname:"",...u.paths));const d=E.isString(u.search)?b0(tt({value:u.search,prefix:"?"})):f1(u.search||{}),m=Uv(c.searchParams,d,{...l,encoding:fn.None}),p=jv(m,l);return{...c,searchParams:m,search:p,paths:A0(c),fullPath:au(c),host:Ps(c),origin:C0(c),href:E0({...c,search:p})}}const qv=ct({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:Vv,hash:"",fullPath:"/",href:"/"},!0);({...qv.defaultValue});const Kv=0;function $0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Kv)}const Is="locationchange",Lt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Lc=Lt?.pushState;function Oc(...e){if(!Lc)return;const t=Lc.apply(Lt,e);return globalThis.dispatchEvent(new Event(Is)),t}const _c=Lt?.replaceState;function Vc(...e){if(!_c)return;const t=_c.apply(Lt,e);return globalThis.dispatchEvent(new Event(Is)),t}function Gv(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Lt)){{if(Lt.pushState===Oc)throw new Rc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Lt.replaceState===Vc)throw new Rc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Lt.pushState=Oc,Lt.replaceState=Vc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Is))})}}function Ri(e,t){const r=Xr(e),n=Yr({value:Yr({value:r.pathname,prefix:tt({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Yr({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class uu{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){e0(t,Ov),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new n0({defaultValue:r,equalityCheck:()=>!1}),Gv(),this.removeGlobalListener=eh(globalThis,Is,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Lv("Looping route sanitization detected; aborting window URL change listener.");const n=Ri(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);E.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:ou(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ri(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Ri(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),s=this.routeIncludesBasePath(Ri(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return zv(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?tt({value:s.hash,prefix:"#"}):""},{searchParamStrategy:hn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Xr(n);return this.params.isPaused||!r.force&&E.jsonEquals(Xr(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return $0(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new su(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function Zv(e){return new uu({basePath:e,sanitizeRoute(t){return{paths:Yv(t.paths),hash:void 0,search:void 0}}})}function Yv(e){const t=e[0];if(E.isEnumValue(t,yt)){if(t===yt.Book)return[yt.Book,...e.slice(1)];if(t===yt.Search)return e[1]?[t,e[1]]:[yt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return on.paths}const us=ru()("element-book-change-route"),Uc="vira-",it=m0({assertInputs:e=>{if(!e.tagName.startsWith(Uc))throw new Error(`Tag name should start with '${Uc}' but got '${e.tagName}'`)}});function Hv(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${U1(r)}`)}function Jv(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function Wc({open:e,callback:t,popUpManager:r,host:n}){if(e){const i=r.showPopUp(n);t?.(i)}else r.removePopUp(),t?.(void 0)}const C=yr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),Qv=ee;function Xv(e){try{if(!e)throw new Error("invalid empty color");return new Qv(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function ie({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function jc(e,t){const r=X(t).map(n=>{const i=t[n],s=Xv(i);return`${C[n].name}: ${s.toString()};`}).join(" ");return ie({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const k0=ie({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jt=yr({"vira-form-input-radius":"8px"}),Rs=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,zt=yr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),mn=yr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":k`calc(${jt["vira-form-input-radius"].value} + 4px)`});function lu({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=me(Kf(n+r+t));return k`
        ${me(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${mn["vira-focus-outline-color"].value};
            border-radius: ${mn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const $t=yr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black"}),eb=k`
    padding: 0;
    margin: 0;
`,Ot=k`
    ${eb};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,zc=k`#e2e2e2`,qc={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${zc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:k`
        filter: drop-shadow(0px -5px 5px ${zc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},pn=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P=it()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>k`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),_t=it()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            ${pn};
        }

        .item {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-menu-item-selected"].selector} ${P} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${P} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .include-left-spacing {
            padding-left: 12px;
        }
    `,render({inputs:e}){return g`
            <div class="item ${Zt({"include-left-spacing":!!e.hideCheckIcon})}">
                ${Pe(!e.hideCheckIcon,g`
                        <${P.assign({icon:k0})}></${P}>
                    `)}
                <slot>${e.label}</slot>
            </div>
        `}});function tb(e,t){return e>t}function rb(e,t){return e<t}function ri(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var kt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(kt||(kt={}));var J;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(J||(J={}));function Ls(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const s=Ls(i.children);s&&(r=s.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Kc(e,t,r,n){if(!t){const u=Ls(e.children);return u?(ri(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:J.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:J.Navigate}}const{nextNode:i,requiresWrapping:s,coords:o}=S0(t.position,r),a=n?!0:!s;return i&&a?(ri(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:r,navAction:J.Navigate,coords:o}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:J.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:J.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:J.Navigate}}function S0(e,t){let r=!1,n,i=1;const s=Date.now();for(;!r||!n;)if(n=nb(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-s>1e3)return S1.warning("Failed to find next non-disabled node."),n;return n}function nb(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;pr.isDefined(n,"missing parent");const i=nn.isDefined(n.children[e.nodeCoords.y]),s=n.children.length>1&&(t===kt.Down||t===kt.Up),o=t===kt.Down||t===kt.Right?r:-1*r,a=o<0?tb:rb,u=s?pl(e.nodeCoords.y+o,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=nn.isDefined(n.children[u]),c=s?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:pl(e.nodeCoords.x+o,{min:0,max:i.length-1,takeOverflow:!0}),d=n.children[u]?.[c],m=s?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:m,coords:{x:c,y:u}}}function ib(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:J.Pibling};const{nextNode:i,requiresWrapping:s,coords:o}=S0(n,t),a=i?.navEntry.navParams.group?Ls(i.children):{node:i,coords:o},u=r?!0:!s;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:J.Pibling}:u?(ri(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:s,coords:a.coords,direction:t,navAction:J.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:J.Pibling}}var Te;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Te||(Te={}));const vt={name:"data-nav",js(e){return e?`[${vt.name}*="${e}"]`:`[${vt.name}]`},css({baseSelector:e="",navValue:t}={}){return k`
            ${me(e)}${me(vt.js(t))}
        `}},cu="navEntry";function x0(e){return cu in e}function F0(e){if(x0(e)){const t=e[cu];return nn.instanceOf(t,T0,"Invalid nav entry")}else return}function sb(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Te.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class T0{element;navParams;navTreeNode;navValue;eventListener=sb(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return pr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(vt.name,""),Co(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Te.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Te.Focused),Co(this.element)||this.element.focus()):(this.removeNavValue(Te.Focused),Co(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,J.Focus)}activate(t){const r=this.navValue,n=t===(r===Te.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Te.Active):this.setNavValue(Te.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,J.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(vt.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(vt.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function ob(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const ab=Yt(class extends Ht{element;lastKey;constructor(e){super(e),this.element=yi(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),rt}});function ub(e){return"group"in e?Te.Group:e.disabled?Te.Disabled:""}function Gc(e,t={}){return ab(h(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;pr.instanceOf(r,HTMLElement);const i={[vt.name]:ub(t),tabindex:n?0:-1};ob(r,i);const s=F0(r)||new T0(r,e,t);x0(r)?(s.navParams=t,s.navController=e):r[cu]=s,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function lb(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:J.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:J.Enter};const r=t.position.node.children[0]?.[0];return r?(ri(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:J.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:J.Enter}}function cb(e,t){return N0([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function N0(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let s=0;s<i.length;s++){const o=i[s],a={ancestorChain:e,nodeCoords:{x:s,y:n},node:o};if(r(a))return a;const u=N0(e.concat(a),o.children,r);if(u)return u}}}function M0(e,t){const r=cb(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function db(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:J.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:J.Exit};const{nodeCoords:n}=M0(e,r.navEntry);return ri(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:J.Exit,coords:n}}class fb extends gr()("nav-exit"){}class B0 extends gr()("nav-activate"){}class hb extends gr()("nav-focus"){}class mb extends gr()("nav-enter"){}class pb extends gr()("nav-navigate"){}class gb extends gr()("nav-navigate-pibling"){}function yb(e){return{root:!0,children:P0(e)?.children||[]}}function P0(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=F0(t),n=wb(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function wb(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,o=ci(t,s,()=>({noX:[],withX:[],y:s}));i==null?o.noX.push(n):o.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=P0(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,s)=>i.x-s.x),n.withX.forEach(({x:i,node:s})=>{n.noX.splice(i,0,s)}),n.noX)).filter(E.isTruthy)}class I0 extends Na{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Ls(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=M0(this.getNavTree(),t);r?(this.navEntries.forEach(o=>{o!==t&&o.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const s={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===J.Activate?this.dispatch(new B0({detail:s})):n===J.Focus&&this.dispatch(new hb({detail:s}))),s}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:J.Navigate,reason:"NavController is locked."};const n=Kc(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new pb({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:J.Enter,reason:"NavController is locked."};const r=lb(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new mb({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:J.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:J.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return pr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:J.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===J.Activate&&this.currentNavEntry.entry.focus(!0);const t=db(this.getNavTree(),this.currentNavEntry);return this.dispatch(new fb({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:J.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),s={...this.currentNavEntry?ib(this.currentNavEntry,r,t):Kc(n,void 0,r,t),navAction:J.Pibling};return this.dispatch(new gb({detail:s})),s}buildNavTree(){const t=Sv(this.rootElement),r=yb(t);return this.cachedNavTree=r,r}}const Kr=it()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>k`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${e.attributePassthrough?.a?la(e.attributePassthrough.a):K}
                    style=${At(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${e.attributePassthrough?.a?la(e.attributePassthrough.a):K}
                    style=${At(e.stylePassthrough?.a)}
                    ${G("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),Zc={item:"menu-item"},Wn=it()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new I0(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${$t["vira-form-background-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Ot};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${vt.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Te.Focused})}, ${vt.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Te.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${$t["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${vt.css({baseSelector:".menu-item:not(.disabled)",navValue:Te.Focused})},
                ${vt.css({baseSelector:".menu-item:not(.disabled)",navValue:Te.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${$t["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${_t} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Rs};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){Hv(e.items);const r=e.items.map(n=>{const i=!!e.selected?.includes(n.id),s=E.isString(n.label)?g`
                      <${_t.assign({label:n.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${_t}>
                  `:n.label,o=n.disabled||!e.isMultiSelect&&i;return n.route?g`
                    <${Kr.assign({route:n.route})}
                        class="menu-item ${Zt({disabled:!!n.disabled,selected:i})}"
                        ${Jr(Zc.item)}
                        title=${At(n.titleText||void 0)}
                        role="option"
                        ${Gc(t.internalNavController,{disabled:o})}
                    >
                        ${s}
                    </${Kr}>
                `:g`
                    <button
                        class="menu-item ${Zt({disabled:!!n.disabled,selected:i})}"
                        ${Jr(Zc.item)}
                        title=${At(n.titleText||void 0)}
                        role="option"
                        ${Gc(t.internalNavController,{disabled:o})}
                    >
                        ${s}
                    </button>
                `});return g`
            ${r}
        `}});var du=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(du||{}),ls=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(ls||{});const jn=it()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>k`
        :host {
            display: flex;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${jt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${$t["vira-form-background-color"].value};
            border: 1px solid ${$t["vira-form-border-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
            ${qc.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${qc.menuShadowReversed}
            border-radius: ${jt["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${jt["vira-form-input-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}});class vb extends n0{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Db.includes(t.type),n=bb.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const bb=["blur","focusout","pagehide"],Db=["focus","focusin","pageshow"],Eb=new vb;function Ab(e,t){return Eb.listen(e,t)}const Yc={top:0,left:0,right:0,bottom:0};class R0 extends Xf("hide-pop-up"){}class L0 extends gr()("nav-select"){}class Cb{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Na;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[Ab(!1,t=>{t||this.removePopUp()}),this.navController.listen(B0,t=>{t.detail.success&&(this.listenTarget.dispatch(new L0({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),yl("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),yl("keydown",t=>{const r=t.code;r==="Escape"?this.removePopUp():this.options.supportNavigation&&(r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault()))})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new R0)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=Nv(t);pr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Le(Yc,p=>s[p]),d=Le(Yc,p=>{const v=l[p],w=c[p],A=p==="bottom"?-51:0;return Math.abs(v-w+A)}),m=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(),{popDown:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}const ze=it()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new Cb(new I0(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ot};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            outline: none;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${lu({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .dropdown-trigger {
            box-sizing: border-box;
            ${pn};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Rs}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            left: 0;
            right: 0;

            & > * {
                pointer-events: auto;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,events:{navSelect:Ie(),openChange:Ie(),init:Ie()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(R0,()=>{if(t({showPopUpResult:void 0}),i(new s.openChange(void 0)),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");pr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(L0,o=>{n.keepOpenAfterInteraction||Wc({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new s.navSelect(o.detail))}),i(new s.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s,slotNames:o}){function a({emitEvent:c,open:d},m){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&m){const p=s.shadowRoot.querySelector(".dropdown-trigger");if(p&&!m.composedPath().includes(p))return}Wc({open:d,callback(p){i({showPopUpResult:p}),c&&e(new t.openChange(p))},host:s,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.showPopUpResult?r.showPopUpResult.popDown?k`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      left: ${n.popUpOffset?.left||0}px;
                      right: ${n.popUpOffset?.right||0}px;
                  `:k`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      left: ${n.popUpOffset?.left||0}px;
                      right: ${n.popUpOffset?.right||0}px;
                  `:void 0;function l(c){a({emitEvent:!0,open:!r.showPopUpResult},c)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Zt({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${G("keydown",c=>{!r.showPopUpResult&&c.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},c)})}
                ${G("click",c=>{c.detail===0&&l(c)})}
                ${G("mousedown",c=>{c.button===0&&l(c)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>
                <div class="pop-up-positioner" style=${u}>
                    ${Pe(!!r.showPopUpResult,g`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),$b={menu:"menu-trigger-menu"},or=it()({tagName:"vira-menu-trigger",styles:k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ze} {
            width: 100%;
        }
    `,events:{itemActivate:Ie(),openChange:Ie()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i}){return g`
            <${ze.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset})}
                class=${Zt({open:!!t.showPopUpResult})}
                ${G(ze.events.init,s=>{r({navController:s.detail.navController,popUpManager:s.detail.popUpManager})})}
                ${G(ze.events.openChange,s=>{!!t.showPopUpResult!=!!s.detail&&n(new i.openChange(s.detail)),r({showPopUpResult:s.detail})})}
                ${G(ze.events.navSelect,s=>{const o=s.detail.x,a=e.items[o];if(!a)throw new Error(`Found no dropdown option at index '${o}'`);n(new i.itemActivate(Jv(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${ze.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${jn.assign({direction:t.showPopUpResult.popDown?ls.Downwards:ls.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${ze.slotNames.popUp}
                          >
                              <${Wn.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Jr($b.menu)}
                              ></${Wn}>
                          </${jn}>
                      `:K}
            </${ze}>
        `}}),le=it()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>k`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return g`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var O0=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(O0||{});const we=it()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${pn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${mn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Rs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ot};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${jt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${zt["vira-interaction-animation-duration"].value},
                background-color
                    ${zt["vira-interaction-animation-duration"].value},
                border-color ${zt["vira-interaction-animation-duration"].value};
        }

        .empty-text {
            width: 0;
        }

        ${lu({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${P} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${P.assign({icon:e.icon})}></${P}>
              `:K,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Mt=it()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ot};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${zt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ie()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${G("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${h0(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),kb=ie({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_0=ie({name:"ChevronUp24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${C["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),V0=ie({name:"CloseX24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sb=ie({name:"Commit24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),xb=ie({name:"Document24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),U0=ie({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ut=ie({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),W0=ie({name:"EyeClosed24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),j0=ie({name:"EyeOpen24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),z0=ie({name:"Loader24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Fb=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${zt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ni=ie({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${Fb}
        </style>
        ${z0.svgTemplate}
    `}),zn=ie({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Tb=ie({name:"Pencil24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Nb=ie({name:"Shield24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Mb=ie({name:"SpeakerLoud24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Bb=ie({name:"SpeakerMedium24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Pb=ie({name:"SpeakerMuted24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ib=ie({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Rb=ie({name:"Star24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),cs=ie({name:"StatusFailure24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lb=ie({name:"StatusInProgress24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Ob=ie({name:"StatusSuccess24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_b=ie({name:"StatusWarning24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" style="fill:none;stroke:#000;stroke-width:1px" />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                style="stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
            <circle cx="12" cy="16" r="1" />
        </svg>
    `}),ha={Chat24Icon:kb,Check24Icon:k0,ChevronUp24Icon:_0,CloseX24Icon:V0,Commit24Icon:Sb,Document24Icon:xb,Element16Icon:U0,Element24Icon:Ut,EyeClosed24Icon:W0,EyeOpen24Icon:j0,Loader24Icon:z0,LoaderAnimated24Icon:ni,Options24Icon:zn,Pencil24Icon:Tb,Shield24Icon:Nb,SpeakerLoud24Icon:Mb,SpeakerMedium24Icon:Bb,SpeakerMuted24Icon:Pb,SpeakerQuiet24Icon:Ib,Star24Icon:Rb,StatusFailure24Icon:cs,StatusInProgress24Icon:Lb,StatusSuccess24Icon:Ob,StatusWarning24Icon:_b},ko={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Rn=it()({tagName:"vira-dropdown",styles:k`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${or} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${zt["vira-interaction-animation-duration"].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
        }

        .dropdown-trigger {
            ${pn};
            border: 1px solid ${$t["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${jt["vira-form-input-radius"].value};
            background-color: ${$t["vira-form-background-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:Ie(),openChange:Ie()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:i}){const s=di(t.selected,c=>t.options.find(d=>d.id===c),E.isTruthy),o=t.icon?g`
                  <${P.assign({icon:t.icon})}
                      ${Jr(ko.icon)}
                  ></${P}>
              `:K,a=!s.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Jr(ko.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:K,l=a?t.placeholder||"":t.isMultiSelect&&s.length>1?`${s.length} Selected`:s[0]?.label||"";return g`
            <${or.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24}})}
                ${G(or.events.openChange,c=>{i({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${G(or.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${Zt({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Jr(ko.trigger)}
                >
                    ${o}
                    <span
                        class="selection-display ${Zt({"using-placeholder":a})}"
                        title=${At(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:_0})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
            </${or}>
        `}}),Xt=it()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Ie(),imageError:Ie()},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?g`
                  <slot class="status-wrapper" name=${s.error}>
                      <${P.assign({icon:cs})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[o]?void 0:g`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${P.assign({icon:ni})}></${P}>
                    </slot>
                `;return g`
            ${Pe(!!a,a)}
            <img
                class=${Zt({hidden:!!a})}
                ${G("load",async()=>{e._debugLoadDelay&&await Gn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${G("error",async u=>{e._debugLoadDelay&&await Gn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function ma({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ma({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Vb({value:e,allowed:t,blocked:r}){const n=t?ma({input:e,matcher:t}):!0,i=r?ma({input:e,matcher:r}):!1;return n&&!i}function pa(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(Vb({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Ub({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const s=In(r,HTMLInputElement),o=E.hasKey(r,"data")&&s1.isString(r.data)||"";if(o){const{blocked:u}=pa({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=pa({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var ga=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(ga||{});const fe=it()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Rs};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Ot};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${pn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Ot};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${jt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${zt["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${Ot};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${jt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${lu({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ot};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${pn};
            }

            button {
                ${Ot};
                cursor: pointer;
                display: flex;
                transition: color
                    ${zt["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,events:{valueChange:Ie(),inputBlocked:Ie()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:s})=>{const{filtered:o}=pa({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:K,u=e.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:K,l=e.disableBrowserHelps||e.type==="password";return g`
            <span
                class="input-wrapper"
                ${G("mouseup",()=>{nn.instanceOf(s.shadowRoot.querySelector("input"),HTMLInputElement).focus()})}
            >
                ${a}
                ${Pe(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${h0(({contentRect:c})=>{n({forcedInputWidth:c.width})})}
                        >
                            <pre>${o||e.placeholder||K}</pre>
                        </span>
                    `)}
                <input
                    type=${Wb(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${At(l?"off":void 0)}
                    autocorrect=${At(l?"off":void 0)}
                    autocapitalize=${At(l?"off":void 0)}
                    spellcheck=${At(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${G("input",c=>{Ub({inputs:e,previousValue:o,event:c,inputBlockedCallback(d){t(new i.inputBlocked(d))},newValueCallback(d){t(new i.valueChange(d))}})})}
                    placeholder=${At(e.placeholder||void 0)}
                    ${e.attributePassthrough?la(e.attributePassthrough):K}
                />
                ${Pe(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${G("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${P.assign({icon:V0})}></${P}>
                        </button>
                    `)}
                ${Pe(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${G("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${P.assign({icon:r.showPassword?j0:W0})}></${P}>
                        </button>
                    `)}
                ${Pe(!!e.suffix,g`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style wrapper-border"></div>
            </span>
        `}});function Wb(e,t){return e==="password"&&t?"text":e||"text"}var ya=(e=>(e.Vertical="vertical",e.Horizontal="horizontal",e))(ya||{});function Hc(e,t,r={}){if(r.orientation==="horizontal")return{headerRow:void 0,rows:e.map(i=>{const s=r.hideHeaders?[]:[{content:i.content??i.key,key:i.key,entry:void 0}],o=t.map(u=>({content:u[i.key],key:i.key,entry:u}));return{cells:[...s,...o],entry:void 0}}),orientation:"horizontal"};{const n=r.hideHeaders?[]:e.map(s=>({content:s.content??s.key,key:s.key,entry:void 0})),i=t.map(s=>({cells:e.map(o=>({content:s[o.key],key:o.key,entry:s})),entry:s}));return{headerRow:n,rows:i,orientation:"vertical"}}}const dt=m0(),at=dt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return g`
            <a
                href=${r}
                ${G("click",n=>{(!e.router||$0(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new us(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function jb(e,t){return e.entry.entryType===Se.Root?!1:e.entry.entryType===Se.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const It=dt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${H["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${H["element-book-nav-hover-background-color"].value};
            color: ${H["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${H["element-book-nav-active-background-color"].value};
            color: ${H["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${at.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${H["element-book-nav-selected-background-color"].value};
            color: ${H["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${P} {
            display: inline-flex;
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!jb(r,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${at.assign({router:e.router,route:{paths:[yt.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Zt({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Pe(Hr(r,Se.ElementExample),g`
                                    <${P.assign({icon:U0})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${at}>
                </li>
            `});return g`
            <${at.assign({route:on,router:e.router})}>
                <slot name=${Vt.NavHeader}>Book</slot>
            </${at}>
            <ul>
                ${t}
            </ul>
        `}});async function zb(e){await fa(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Fv(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const mr=dt()({tagName:"book-error",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>g`
                <p>${r}</p>
            `)}}),ii=dt()({tagName:"book-page-controls",events:{controlValueChange:Ie()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${fe} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===Z.Hidden)return"";const o=qb(e.currentValues[n],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${Pe(s===0,g`
                                <${P.assign({icon:zn})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function qb(e,t,r){return Lr(t,Z.Hidden)?"":Lr(t,Z.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${G("input",n=>{const i=In(n,HTMLInputElement);r(i.checked)})}
            />
        `:Lr(t,Z.Color)?g`
            <input
                type="color"
                .value=${e}
                ${G("input",n=>{const i=In(n,HTMLInputElement);r(i.value)})}
            />
        `:Lr(t,Z.Text)?g`
            <${fe.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${G(fe.events.valueChange,n=>{r(n.detail)})}
            ></${fe}>
        `:Lr(t,Z.Number)?g`
            <input
                type="number"
                .value=${e}
                ${G("input",n=>{const i=In(n,HTMLInputElement);r(i.value)})}
            />
        `:Lr(t,Z.Dropdown)?g`
            <select
                .value=${e}
                ${G("input",n=>{const i=In(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:g`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Jc=dt()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,o=i.slice(0,n+1),a=s?"":g`
                      <span class="spacer">&gt;</span>
                  `;return g`
                <${at.assign({route:{hash:void 0,search:void 0,paths:[yt.Book,...o]},router:e.router})}>
                    ${r}
                </${at}>
                ${a}
            `}):g`
                &nbsp;
            `}}),So=dt()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${H["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${H["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${Pe(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${Jc.assign({currentRoute:e.currentRoute,router:e.router})}></${Jc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${G("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await Gn({milliseconds:200}),n.value===i&&(n.value?t(new us({paths:[yt.Search,encodeURIComponent(n.value)]})):t(new us(on)))})}
            />
        `}}),Qc=dt()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${H["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>g`
                <p>${t}</p>
            `)}}),Xc=dt()({tagName:"book-page-wrapper",styles:k`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${at} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[yt.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?zf(e.pageNode.entry.errors):void 0;return n&&console.error(n),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${at.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${at}>
                    ${n?g`
                              <${mr.assign({message:n.message})}></${mr}>
                          `:g`
                              <${Qc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Qc}>
                              <${ii.assign({config:e.pageNode.entry.controls,currentValues:Pa(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ii}>
                          `}
                </div>
            </div>
        `}}),Li=dt()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[yt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${at.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${at}>
        `}}),ed=Symbol("unset-internal-state"),td=dt()({tagName:"book-element-example-viewer",state(){return{isUnset:ed}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw zf(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===ed&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${Pe(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Re(n)),console.error(n),g`
                <${mr.assign({message:`${t.elementExampleNode.entry.title} failed: ${Re(n)}`})}></${mr}>
            `}},options:{allowPolymorphicState:!0}}),rd=dt()({tagName:"book-element-example-wrapper",styles:k`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Li} {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Li} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Li.assign(B1(e,["currentPageControls"]))}></${Li}>
                <${td.assign(e)}></${td}>
            </div>
        `}});function q0(e,t,r,n){const i=Go(r,n),s=[];if(i){const o=q0(e,t,i,n);o&&s.push(o)}if(Hr(r,Se.Page)&&!e.includes(r)){const o=Pa(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:o,breadcrumbs:Le(o,()=>r.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Kb({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[g`
                No results
            `];const o=E.isLengthAtLeast(e,1)?q0(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?g`
                  <${ii.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${ii}>
              `:K,u=lv(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Hr(l,Se.Page))return g`
                    <${Xc.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Xc}>
                `;if(Hr(l,Se.ElementExample)){const c=Pa(i,l.fullUrlBreadcrumbs.slice(0,-1));return g`
                    <${rd.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry"
                    ></${rd}>
                `}else return Hr(l,Se.Root)?K:g`
                    <${mr.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${mr}>
                `});return[a,u]}const Wr=dt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${So} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${zt["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:Ie()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=Zo(e.currentRoute.paths),o=Kb({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return g`
            <${So.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${So}>

            ${Pe(e.showLoading,g`
                    <div
                        ${Pc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:ni})}></${P}>
                    </div>
                    ${Pe(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${Vt.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Pc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${Vt.Footer}></slot>
                `)}
        `}});function Gb(e,t,r){const n=nd(e,t);return n.length?n:(r(on),nd(e,on.paths))}function nd(e,t){return e.filter(r=>j1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const xo=nu()({tagName:"element-book-app",state(){return{currentRoute:on,router:void 0,loading:!0,colors:{config:void 0,theme:Ic(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Ie()},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${H["element-book-page-background-color"].value};
            color: ${H["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Wr} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${It} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await id(e,Zo(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(c){return{...e.currentRoute,...c}}function a(c){const d=o(c);return!E.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=o(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=Zv(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,S=>{n({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const D=Ic(c);n({colors:{config:c,theme:D}}),Ey(r,D)}const d=t._debug??!1,m=Z1({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:ih(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Zo(e.currentRoute.paths),w=(p?Rv({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??Gb(m.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const A=e.treeBasedControls?.controls;return A?(t._debug&&console.info({currentControls:A}),g`
                <div
                    class="root"
                    ${G(us,async D=>{const S=D.detail;if(!a(S))return;if(n({loading:!0}),l(S),!(r.shadowRoot.querySelector(It.tagName)instanceof It))throw new TypeError(`Failed to find child '${It.tagName}'`);await id(r,p,e.currentRoute)})}
                    ${G(ii.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const S=H1(A,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${It.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Vt.NavHeader}
                            slot=${Vt.NavHeader}
                        ></slot>
                    </${It}>
                    <${Wr.assign({controls:A,currentNodes:w,currentRoute:e.currentRoute,debug:d,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${G(Wr.events.loadingRender,async D=>{await fa();const S=r.shadowRoot.querySelector(Wr.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Wr.tagName}' for scrolling.`),await fa(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Vt.Footer}
                            slot=${Vt.Footer}
                        ></slot>
                    </${Wr}>
                </div>
            `):g`
                    <${mr.assign({message:"Failed to generate page controls."})}></${mr}>
                `}catch(c){return console.error(c),g`
                <p class="error">${Re(c)}</p>
            `}}});async function id(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(It.tagName);if(!(n instanceof It))throw new TypeError(`Failed to find child '${It.tagName}'`);await zb(n)}const Ge=Ae({title:"Elements",parent:void 0}),K0=Ae({title:"Util",parent:void 0}),Zb=Ae({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Z.Color,initValue:""},"Fill Color":{controlType:Z.Color,initValue:""},"Stroke Width":{controlType:Z.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ha).forEach(t=>{e({title:t.name,styles:k`
                    :host(:hover) ${P} {
                        background-color: #f2f2f2;
                    }

                    ${P} {
                        padding: 8px;
                        border-radius: ${jt["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=k`
                        ${C["vira-icon-fill-color"].name}: ${me(r["Fill Color"]||"inherit")};
                        ${C["vira-icon-stroke-color"].name}: ${me(r["Stroke Color"]||"inherit")};
                        ${C["vira-icon-stroke-width"].name}: ${me(r["Stroke Width"]?Kf(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${P.assign({icon:t})} style=${n}></${P}>
                    `}})})}}),Yb=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:k`
            ${_t} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],Hb=Ae({title:_t.tagName,parent:Ge,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Z.Text,initValue:""}},defineExamples({defineExample:e}){Yb.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${_t.assign(n)}>
                                ${t.customTemplate}
                            </${_t}>
                        `:g`
                            <${_t.assign(n)}></${_t}>
                        `}})})}}),Jb=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new uu({sanitizeRoute(e){return e}})}}],Qb=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:du.AllRounded}},{title:"no checks",inputs:{hideCheckIcons:!0}},{title:"disabled",inputs:{isDisabled:!0}}],Xb=Ae({parent:Ge,title:or.tagName,defineExamples({defineExample:e}){Qb.forEach(t=>{e({title:t.title,styles:k`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${or.assign({items:Jb,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${or}>
                    `}})})}}),G0=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],eD=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...G0,{id:4,label:"link here",route:{route:{paths:["test"]},router:new uu({sanitizeRoute(e){return e}})}}]}}],tD=Ae({parent:Ge,title:Wn.tagName,defineExamples({defineExample:e}){eD.forEach(t=>{e({title:t.title,render(){return g`
                        <${Wn.assign({isMultiSelect:!1,navController:void 0,items:G0,selected:[],...t.inputs})}></${Wn}>
                    `}})})}}),Z0=[];gt(ls).forEach(e=>{gt(du).forEach(t=>{Z0.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const rD=Ae({parent:Ge,title:jn.tagName,defineExamples({defineExample:e}){Z0.forEach(t=>{e({title:t.title,styles:k`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${jn.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${jn}>
                    `}})})}}),nD=Ae({parent:Ge,title:ze.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:k`
                ${ze} {
                    ${mn["vira-focus-outline-border-radius"].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .menu {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,render(){return g`
                    <${ze.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${ze.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="menu" slot=${ze.slotNames.popUp}>Pop up!</div>
                    </${ze}>
                `}})}}),iD=[{key:"a"},{key:"b",content:"b-content"}],sD=[{a:"a1",b:"b1"},{a:"a2",b:"b2"},{a:"a3",b:"b3"}],oD=[{title:"Vertical (default)"},{title:"Vertical without headers",options:{hideHeaders:!0}},{title:"Horizontal",options:{orientation:ya.Horizontal}},{title:"Horizontal without headers",options:{hideHeaders:!0,orientation:ya.Horizontal}}],aD=Ae({parent:K0,title:Hc.name,defineExamples({defineExample:e}){oD.forEach(t=>{e({title:t.title,render(){const r=Hc(iD,sD,t.options);return g`
                        <table>
                            <thead>
                                ${(r.headerRow||[]).map(n=>g`
                                        <th>${n.content}</th>
                                    `)}
                            </thead>
                            <tbody>
                                ${r.rows.map(n=>{const i=n.cells.map(s=>g`
                                            <td>${s.content}</td>
                                        `);return g`
                                        <tr>${i}</tr>
                                    `})}
                            </tbody>
                        </table>
                    `}})})}}),uD=Ae({parent:Ge,title:le.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${le.assign({text:"Text here",bold:!1})}></${le}>
                `}}),e({title:"Bold",render(){return g`
                    <${le.assign({text:"Text here",bold:!0})}></${le}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${le.assign({text:"Text here",bold:t.bolded})}></${le}>
                `}}),e({title:"Resized",styles:k`
                ${le} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Alignment",styles:k`
                ${le} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Stylized",styles:k`
                ${le} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}})}}),lD=Ae({parent:Ge,title:we.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Z.Color,initValue:we.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const s=n??k``;e({title:r,styles:s,render({controls:o}){const a=k`
                        ${we.cssVars["vira-button-primary-color"].name}: ${me(o["Primary color"]||"inherit")};
                        ${we.cssVars["vira-button-secondary-color"].name}: ${me(o["Secondary color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-hover-color"].name}: ${me(o["Hover color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-active-color"].name}: ${me(o["Active color"]||"inherit")};
                    `;return g`
                        <${we.assign({text:"hello",...i})}
                            style=${a}
                        ></${we}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:zn}}),t({title:"with expanding icon",inputs:{icon:zn,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:O0.Outline}}),t({title:"only icon",inputs:{icon:zn,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:k`
                ${we} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:k`
                ${we} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:k`
                :host {
                    ${we.cssVars["vira-button-primary-color"].name}: pink;
                    ${we.cssVars["vira-button-secondary-color"].name}: purple;
                    ${we.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${we.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${we.assign({text:"hello"})}></${we}>
                `}})}}),cD=Ae({title:Mt.tagName,parent:Ge,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>g`
                        <${Mt.assign({expanded:!!r.expandedStates[i]})}
                            ${G(Mt.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Mt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${G("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Pe(!!r.showMoreStates[i],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Mt}>
                    `)}}),e({title:"wider examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>g`
                        <${Mt.assign({expanded:!!r.expandedStates[i]})}
                            ${G(Mt.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Mt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${G("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Pe(!!r.showMoreStates[i],g`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${Mt}>
                    `)}})}}),qn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],dD=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...qn,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...qn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${Rn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Ut}}],fD=Ae({title:Rn.tagName,parent:Ge,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["",...qn.map(e=>e.label)]},Prefix:{controlType:Z.Text,initValue:""},"Force State":{controlType:Z.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Z.Dropdown,initValue:"",options:["",...Object.keys(ha)]},Disabled:{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Z.Text,initValue:"Select something"}},defineExamples({defineExample:e}){dD.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const s={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||qn,selected:i.Selected?[qn.find(o=>o.label===i.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?ha[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${Rn.assign(s)}
                            ${G(Rn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${Rn}>
                    `}})})}}),hD=Ae({title:P.tagName,parent:Ge,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${P.assign({icon:Ut})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${P.assign({icon:jc(Ut,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"fit container",styles:k`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${P.assign({icon:jc(Ut,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}})}}),mD=Ae({title:Xt.tagName,parent:Ge,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:g`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:ni,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:g`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:cs,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:k`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:g`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:ni,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:g`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:cs,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:k`
                    ${Xt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||k``}
                    }

                    ${r.allowReload?k`
                              ${Xt} {
                                  cursor: pointer;
                              }

                              ${Xt}:hover {
                                  border-color: #0055ff;
                              }
                          `:k``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return g`
                        <${Xt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${G("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${jf()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${Xt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:K}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${Xt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:K}
                        </${Xt}>
                    `}})})}}),pD=Ae({title:fe.tagName,parent:Ge,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-border-color"].default},"Focus color":{controlType:Z.Color,initValue:mn["vira-focus-outline-color"].default},"Selection color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:s}){e({title:i,styles:k`
                    ${n||k``}
                `,state(){return{value:s.value}},render({state:o,updateState:a,controls:u}){const l={[String(fe.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(fe.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(fe.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(mn["vira-focus-outline-color"].name)]:u["Focus color"],[String(fe.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},c=Le(l,(m,p)=>p||"inherit"),d=Object.entries(c).map(([m,p])=>[m,p].join(": ")+";").join(`
`);return g`
                        <${fe.assign({...s,value:o.value})}
                            style=${d}
                            ${G(fe.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${fe}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Ut}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${fe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ut}},{title:"taller height",styles:k`
                    ${fe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Ut}},{title:"shorter height",styles:k`
                    ${fe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ut}},{title:"max width",styles:k`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:ga.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:ga.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),gD=Ae({title:Kr.tagName,parent:Ge,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Z.Color,initValue:""},"Hover color":{controlType:Z.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const s=k`
                        ${Kr.cssVars["vira-link-hover-color"].name}: ${me(i["Hover color"]||"inherit")};
                        color: ${me(i["CSS Color"]||"inherit")};
                    `;return g`
                        <${Kr.assign(n)} style=${s}>My Link</${Kr}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),yD=[Ge,Zb,K0],wD=[uD,lD,cD,fD,hD,mD,pD,gD,Hb,tD,Xb,rD,nD,aD].sort((e,t)=>e.title.localeCompare(t.title)),vD=[...yD,...wD];nu()({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${xo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return g`
            <${xo.assign({internalRouterConfig:{basePath:ou("element-vir","vira"),useInternalRouter:!0},pages:vD,themeColor:"#33ccff"})}>
                <h1 slot=${Vt.NavHeader}>Vira</h1>
            </${xo}>
        `}});
